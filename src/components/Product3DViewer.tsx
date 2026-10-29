"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCw, Play, Pause, RefreshCw, Layers, ZoomIn, ZoomOut } from "lucide-react";

export type FabricPatternType = "diamond" | "smooth";

interface Product3DViewerProps {
  colorHex: string;
  colorName: string;
  colorCode: string;
  textColor?: "light" | "dark";
  pattern?: FabricPatternType;
  onPatternChange?: (pattern: FabricPatternType) => void;
}

interface CachedTextures {
  diamondDiff: THREE.CanvasTexture;
  diamondBump: THREE.CanvasTexture;
  diamondRough: THREE.CanvasTexture;
  smoothDiff: THREE.CanvasTexture;
  smoothBump: THREE.CanvasTexture;
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function Product3DViewer({
  colorHex,
  colorName,
  colorCode,
  pattern,
  onPatternChange,
}: Product3DViewerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [internalPattern, setInternalPattern] = useState<FabricPatternType>(pattern || "diamond");
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  const activePattern = pattern !== undefined ? pattern : internalPattern;

  // Sync internal pattern if controlled pattern prop changes
  useEffect(() => {
    if (pattern !== undefined && pattern !== internalPattern) {
      setInternalPattern(pattern);
    }
  }, [pattern, internalPattern]);

  const handlePatternSelect = (newPattern: FabricPatternType) => {
    setInternalPattern(newPattern);
    if (onPatternChange) {
      onPatternChange(newPattern);
    }
  };

  // References to keep Three.js objects across renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rollMeshRef = useRef<THREE.Group | null>(null);
  const fabricMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const cachedTexturesRef = useRef<CachedTextures | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Generate the authentic procedural nonwoven textures (Diamond Point-Bond & Smooth)
  const createTextures = useCallback((): CachedTextures => {
    // 1. TRUE 45° CONTINUOUS DIAMOND LATTICE (512x512 Seamless Tiling)
    const dSize = 512;
    const d = 16;   // Grid spacing: rows step by 16, points step by 32 (pure 45° checkerboard)
    const rx = 4.75; // Diamond cut hole size (+20% from 3.96)
    const ry = 4.75;

    // --- A. Diamond Diffuse Shading Map ---
    const dDiffCanvas = document.createElement("canvas");
    dDiffCanvas.width = dSize;
    dDiffCanvas.height = dSize;
    const ddCtx = dDiffCanvas.getContext("2d")!;

    // Soft fibrous light base tone
    ddCtx.fillStyle = "#f6f7f9";
    ddCtx.fillRect(0, 0, dSize, dSize);

    // Micro-fibers texture noise across nonwoven web
    const dImgData = ddCtx.getImageData(0, 0, dSize, dSize);
    const dData = dImgData.data;
    for (let i = 0; i < dData.length; i += 4) {
      const noise = Math.sin(i * 0.019) * 3 + Math.cos(i * 0.033) * 3;
      const val = Math.min(255, Math.max(242, Math.floor(250 + noise)));
      dData[i] = val;
      dData[i + 1] = val;
      dData[i + 2] = val;
    }
    ddCtx.putImageData(dImgData, 0, 0);

    // --- B. Diamond Bump Map (Indented point-bonds) ---
    const dBumpCanvas = document.createElement("canvas");
    dBumpCanvas.width = dSize;
    dBumpCanvas.height = dSize;
    const dbCtx = dBumpCanvas.getContext("2d")!;
    dbCtx.fillStyle = "#d8d8d8"; // Raised fabric level
    dbCtx.fillRect(0, 0, dSize, dSize);

    // --- C. Diamond Roughness Map ---
    const dRoughCanvas = document.createElement("canvas");
    dRoughCanvas.width = dSize;
    dRoughCanvas.height = dSize;
    const drCtx = dRoughCanvas.getContext("2d")!;
    drCtx.fillStyle = "#c8c8c8"; // ~0.76 roughness for matte unbonded web
    drCtx.fillRect(0, 0, dSize, dSize);

    const drawDiamond = (ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy - h);
      ctx.lineTo(cx + w, cy);
      ctx.lineTo(cx, cy + h);
      ctx.lineTo(cx - w, cy);
      ctx.closePath();
    };

    // Continuous 45° diagonal lattice (Every row steps by d=16, alternating by d=16)
    for (let y = 0; y < dSize; y += d) {
      const rowIndex = y / d;
      const offsetX = rowIndex % 2 === 0 ? 0 : d;
      for (let x = 0; x < dSize; x += 2 * d) {
        const cx = (x + offsetX) % dSize;
        const cy = y;

        // 1. Diffuse Shading:
        // Soft, gentle calender-pressed indentation (not dark black holes)
        ddCtx.fillStyle = "#b4bac4";
        drawDiamond(ddCtx, cx, cy, rx, ry);
        ddCtx.fill();

        // Top-left highlighted beveled rim (soft specular sheen)
        ddCtx.strokeStyle = "rgba(255, 255, 255, 0.75)";
        ddCtx.lineWidth = 0.9;
        ddCtx.beginPath();
        ddCtx.moveTo(cx - rx, cy);
        ddCtx.lineTo(cx, cy - ry);
        ddCtx.lineTo(cx + rx, cy);
        ddCtx.stroke();

        // Bottom-right gentle shadow rim
        ddCtx.strokeStyle = "rgba(45, 55, 70, 0.35)";
        ddCtx.lineWidth = 0.9;
        ddCtx.beginPath();
        ddCtx.moveTo(cx - rx, cy);
        ddCtx.lineTo(cx, cy + ry);
        ddCtx.lineTo(cx + rx, cy);
        ddCtx.stroke();

        // Inner core (gentle mid-tone)
        ddCtx.fillStyle = "#a2a8b3";
        drawDiamond(ddCtx, cx, cy, rx * 0.55, ry * 0.55);
        ddCtx.fill();

        // 2. Bump Map:
        // Outer beveled slope
        dbCtx.strokeStyle = "#b0b0b0";
        dbCtx.lineWidth = 1.0;
        drawDiamond(dbCtx, cx, cy, rx, ry);
        dbCtx.stroke();

        // Indented point depression
        dbCtx.fillStyle = "#555555";
        drawDiamond(dbCtx, cx, cy, rx * 0.85, ry * 0.85);
        dbCtx.fill();

        // Central pit
        dbCtx.fillStyle = "#383838";
        drawDiamond(dbCtx, cx, cy, rx * 0.45, ry * 0.45);
        dbCtx.fill();

        // 3. Roughness Map:
        // Pressed point has slight smooth sheen
        drCtx.fillStyle = "#656565"; // ~0.40 roughness
        drawDiamond(drCtx, cx, cy, rx, ry);
        drCtx.fill();
      }
    }

    // Pure integer repeat in X and Y (eliminates all seam lines and square grouping artifacts)
    const diamondDiff = new THREE.CanvasTexture(dDiffCanvas);
    diamondDiff.wrapS = THREE.RepeatWrapping;
    diamondDiff.wrapT = THREE.RepeatWrapping;
    diamondDiff.repeat.set(16, 6);

    const diamondBump = new THREE.CanvasTexture(dBumpCanvas);
    diamondBump.wrapS = THREE.RepeatWrapping;
    diamondBump.wrapT = THREE.RepeatWrapping;
    diamondBump.repeat.set(16, 6);

    const diamondRough = new THREE.CanvasTexture(dRoughCanvas);
    diamondRough.wrapS = THREE.RepeatWrapping;
    diamondRough.wrapT = THREE.RepeatWrapping;
    diamondRough.repeat.set(16, 6);

    // 2. SMOOTH PATTERN TEXTURES (256x256 Seamless Tiling)
    const sSize = 256;
    const sDiffCanvas = document.createElement("canvas");
    sDiffCanvas.width = sSize;
    sDiffCanvas.height = sSize;
    const sdCtx = sDiffCanvas.getContext("2d")!;
    sdCtx.fillStyle = "#fafbfc";
    sdCtx.fillRect(0, 0, sSize, sSize);

    // Micro-weave noise for soft uniform cloth appearance
    const sImgData = sdCtx.getImageData(0, 0, sSize, sSize);
    const sData = sImgData.data;
    for (let i = 0; i < sData.length; i += 4) {
      const val = 248 + Math.floor(Math.sin(i * 0.05) * 4);
      sData[i] = val;
      sData[i + 1] = val;
      sData[i + 2] = val;
    }
    sdCtx.putImageData(sImgData, 0, 0);

    const sBumpCanvas = document.createElement("canvas");
    sBumpCanvas.width = sSize;
    sBumpCanvas.height = sSize;
    const sbCtx = sBumpCanvas.getContext("2d")!;
    sbCtx.fillStyle = "#808080";
    sbCtx.fillRect(0, 0, sSize, sSize);
    const sbData = sbCtx.getImageData(0, 0, sSize, sSize);
    for (let i = 0; i < sbData.data.length; i += 4) {
      const val = 128 + Math.floor(Math.sin(i * 0.07) * 8);
      sbData.data[i] = val;
      sbData.data[i + 1] = val;
      sbData.data[i + 2] = val;
    }
    sbCtx.putImageData(sbData, 0, 0);

    const smoothDiff = new THREE.CanvasTexture(sDiffCanvas);
    smoothDiff.wrapS = THREE.RepeatWrapping;
    smoothDiff.wrapT = THREE.RepeatWrapping;
    smoothDiff.repeat.set(10, 4);

    const smoothBump = new THREE.CanvasTexture(sBumpCanvas);
    smoothBump.wrapS = THREE.RepeatWrapping;
    smoothBump.wrapT = THREE.RepeatWrapping;
    smoothBump.repeat.set(10, 4);

    return {
      diamondDiff,
      diamondBump,
      diamondRough,
      smoothDiff,
      smoothBump
    };
  }, []);

  // Helper to create circular roll-end texture with concentric wound fabric layers and paper core
  const createRollEndTexture = useCallback((baseHex: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const center = 256;

    // Background fabric color
    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, 512, 512);

    // Concentric wound fabric layer rings
    ctx.strokeStyle = "rgba(0, 0, 0, 0.18)";
    ctx.lineWidth = 1.6;
    for (let r = 70; r < 250; r += 3.5) {
      ctx.beginPath();
      ctx.arc(center, center, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Outer edge boundary ring
    ctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(center, center, 248, 0, Math.PI * 2);
    ctx.stroke();

    // Kraft paper core cardboard wall (76mm standard ID)
    ctx.fillStyle = "#c89d6e";
    ctx.beginPath();
    ctx.arc(center, center, 70, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#8b5a2b";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(center, center, 70, 0, Math.PI * 2);
    ctx.stroke();

    // Cardboard core paper spiral winding lines
    ctx.strokeStyle = "#a77b4d";
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(center, center, 60 - i * 3, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Inner hollow dark core
    const gradient = ctx.createRadialGradient(center, center, 10, center, center, 50);
    gradient.addColorStop(0, "#0b0f19");
    gradient.addColorStop(1, "#1e293b");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(center, center, 50, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  // Helper to apply the selected pattern to a fabric material
  const applyPatternToMaterial = useCallback(
    (mat: THREE.MeshStandardMaterial, patternType: FabricPatternType) => {
      const textures = cachedTexturesRef.current;
      if (!textures) return;

      if (patternType === "diamond") {
        mat.map = textures.diamondDiff;
        mat.bumpMap = textures.diamondBump;
        mat.bumpScale = 0.08; // Subtle authentic calender embossing depth
        mat.roughnessMap = textures.diamondRough;
        mat.roughness = 0.72;
        mat.metalness = 0.04;
      } else {
        mat.map = textures.smoothDiff;
        mat.bumpMap = textures.smoothBump;
        mat.bumpScale = 0.012;
        mat.roughnessMap = null;
        mat.roughness = 0.65;
        mat.metalness = 0.04;
      }
      mat.needsUpdate = true;
    },
    []
  );

  // Build the 3D Spunbond Roll Model
  const buildRollModel = useCallback(
    (initialPattern: FabricPatternType, baseColor: THREE.Color) => {
      const group = new THREE.Group();

      const rollRadius = 1.05;
      const rollLength = 2.6;

      // 1. Main Fabric Body (Pure solid cylinder)
      const rollMat = new THREE.MeshStandardMaterial({
        color: baseColor,
        roughness: 0.70,
        metalness: 0.08
      });
      applyPatternToMaterial(rollMat, initialPattern);
      fabricMaterialsRef.current.push(rollMat);

      const bodyGeom = new THREE.CylinderGeometry(rollRadius, rollRadius, rollLength, 64, 1, true);
      const bodyMesh = new THREE.Mesh(bodyGeom, rollMat);
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      group.add(bodyMesh);

      // 2. Roll End Caps (Wound concentric fabric + core tube texture)
      const endTex = createRollEndTexture(colorHex);
      const endMat = new THREE.MeshStandardMaterial({
        map: endTex || undefined,
        roughness: 0.7,
        metalness: 0.05
      });

      const endCapGeom = new THREE.CircleGeometry(rollRadius, 64);

      // Top end cap
      const topCap = new THREE.Mesh(endCapGeom, endMat);
      topCap.position.y = rollLength / 2;
      topCap.rotation.x = -Math.PI / 2;
      group.add(topCap);

      // Bottom end cap
      const botCap = new THREE.Mesh(endCapGeom, endMat);
      botCap.position.y = -rollLength / 2;
      botCap.rotation.x = Math.PI / 2;
      group.add(botCap);

      // 3. Protruding Inner Cardboard Core Tube (76mm ID)
      const coreRadius = 0.24;
      const coreLength = rollLength + 0.1;
      const coreGeom = new THREE.CylinderGeometry(coreRadius, coreRadius, coreLength, 32, 1, true);
      const coreMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#c89d6e"),
        roughness: 0.85,
        metalness: 0.02,
        side: THREE.DoubleSide
      });
      const coreMesh = new THREE.Mesh(coreGeom, coreMat);
      group.add(coreMesh);

      // Orient the roll on a pleasing dynamic isometric angle
      group.rotation.z = Math.PI / 3.4;
      group.rotation.x = 0.22;

      return group;
    },
    [applyPatternToMaterial, colorHex, createRollEndTexture]
  );

  // Initialize Three.js scene (Runs only once on mount)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    if (!isWebGLAvailable()) {
      setHasWebGL(false);
      setIsLoaded(true);
      return;
    }

    fabricMaterialsRef.current = [];

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera (closer initial perspective for prominent view)
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 340;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.1, 1.7, 3.5);
    cameraRef.current = camera;

    // Renderer with antialias and alpha
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
    } catch {
      setHasWebGL(false);
      setIsLoaded(true);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;

    // Clean container before appending
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Controls for full 360-degree rotation with expanded zoom limits
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = true;
    controls.minDistance = 1.25; // Expanded zoom-in limit for extreme close-up macro detail
    controls.maxDistance = 15.0; // Expanded zoom-out limit
    controls.autoRotate = isAutoRotate;
    controls.autoRotateSpeed = 1.8;
    controlsRef.current = controls;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    // Main key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(5, 7, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Soft blue-tinted fill light from the left
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.1);
    fillLight.position.set(-6, 3, -2);
    scene.add(fillLight);

    // Rim light from behind
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(0, -4, -6);
    scene.add(rimLight);

    // Soft contact ground shadow plane
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext("2d");
    if (sctx) {
      const grad = sctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, "rgba(15, 23, 42, 0.35)");
      grad.addColorStop(0.5, "rgba(15, 23, 42, 0.12)");
      grad.addColorStop(1, "rgba(15, 23, 42, 0)");
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.8
    });
    const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 5.5), shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.55;
    scene.add(shadowPlane);

    // Generate and cache procedural textures
    cachedTexturesRef.current = createTextures();

    // Build Roll model
    const baseColor = new THREE.Color(colorHex);
    const rollGroup = buildRollModel(activePattern, baseColor);
    rollMeshRef.current = rollGroup;
    scene.add(rollGroup);

    setIsLoaded(true);

    // Render loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();

      // Dispose cached textures
      if (cachedTexturesRef.current) {
        cachedTexturesRef.current.diamondDiff.dispose();
        cachedTexturesRef.current.diamondBump.dispose();
        cachedTexturesRef.current.diamondRough.dispose();
        cachedTexturesRef.current.smoothDiff.dispose();
        cachedTexturesRef.current.smoothBump.dispose();
      }

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update pattern on materials when activePattern changes
  useEffect(() => {
    fabricMaterialsRef.current.forEach((mat) => {
      applyPatternToMaterial(mat, activePattern);
    });
  }, [activePattern, applyPatternToMaterial]);

  // Update materials when colorHex changes
  useEffect(() => {
    const targetColor = new THREE.Color(colorHex);
    fabricMaterialsRef.current.forEach((mat) => {
      mat.color.set(targetColor);
      mat.needsUpdate = true;
    });

    // Also update end caps texture with the new color
    if (rollMeshRef.current) {
      const newEndTex = createRollEndTexture(colorHex);
      rollMeshRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.CircleGeometry) {
          if (child.material && newEndTex) {
            child.material.map = newEndTex;
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [colorHex, createRollEndTexture]);

  // Update autoRotate in controls
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotate;
    }
  }, [isAutoRotate]);

  const handleResetView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(3.1, 1.7, 3.5);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  // Zoom In along camera-target vector for macro detail
  const handleZoomIn = () => {
    if (cameraRef.current && controlsRef.current) {
      const pos = cameraRef.current.position;
      const target = controlsRef.current.target;
      const dir = pos.clone().sub(target);
      const currentDist = dir.length();
      const newDist = Math.max(1.25, currentDist * 0.72);
      dir.setLength(newDist);
      pos.copy(target).add(dir);
      controlsRef.current.update();
    }
  };

  // Zoom Out along camera-target vector
  const handleZoomOut = () => {
    if (cameraRef.current && controlsRef.current) {
      const pos = cameraRef.current.position;
      const target = controlsRef.current.target;
      const dir = pos.clone().sub(target);
      const currentDist = dir.length();
      const newDist = Math.min(14.0, currentDist * 1.35);
      dir.setLength(newDist);
      pos.copy(target).add(dir);
      controlsRef.current.update();
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-100/90 via-slate-50 to-white border border-slate-200/90 shadow-sm overflow-hidden select-none">
      
      {/* Top Bar: Title & 360° Interactive Badge */}
      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10 flex items-center justify-between pointer-events-none gap-2">
        <div className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs pointer-events-auto min-w-0">
          <Layers className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
            <span className="hidden sm:inline">PP Spunbond </span>Fabric Roll
          </span>
        </div>

        {/* 360° Movable Pill Badge */}
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase shadow-xs pointer-events-auto shrink-0">
          <RotateCw className="w-3 h-3 text-sky-400 animate-spin-slow shrink-0" />
          <span>360°<span className="hidden sm:inline"> 3D Interactive</span></span>
        </div>
      </div>

      {/* Pattern Selector Floating Pill Bar */}
      <div className="absolute top-12 left-2.5 sm:left-3 z-10 flex items-center gap-1 p-1 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs pointer-events-auto">
        <span className="text-xs font-bold text-slate-700 px-1.5 uppercase tracking-wider hidden xs:inline">
          Texture:
        </span>
        <button
          type="button"
          onClick={() => handlePatternSelect("diamond")}
          className={`px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer ${
            activePattern === "diamond"
              ? "bg-sky-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Thermal calender diamond point-bonded pattern (standard spunbond nonwoven)"
        >
          <span>◇ Diamond Cut</span>
        </button>
        <button
          type="button"
          onClick={() => handlePatternSelect("smooth")}
          className={`px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer ${
            activePattern === "smooth"
              ? "bg-sky-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Calender-free smooth cloth finish"
        >
          <span>◌ Smooth Finish</span>
        </button>
      </div>

      {/* WebGL Canvas Container or 2D Graceful Fallback */}
      {hasWebGL ? (
        <div
          ref={mountRef}
          className="w-full h-[340px] xs:h-[370px] sm:h-[400px] md:h-[450px] lg:h-[470px] cursor-grab active:cursor-grabbing touch-none"
          title="Click and drag to rotate in 360°. Scroll or use +/- to zoom."
        />
      ) : (
        <div className="w-full h-[340px] xs:h-[370px] sm:h-[400px] md:h-[450px] lg:h-[470px] flex flex-col items-center justify-center p-6 text-center bg-slate-100 rounded-2xl relative overflow-hidden">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden border border-slate-300 transition-colors duration-300"
            style={{ backgroundColor: colorHex }}
          >
            {activePattern === "diamond" && (
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, #000 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px"
                }}
              />
            )}
            <div className="relative z-10 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-xs font-bold text-slate-900 shadow-md">
              {colorName}
            </div>
          </div>
          <p className="text-sm text-slate-800 mt-4 max-w-xs font-semibold">
            WebGL is unavailable in your browser environment. Displaying 2D fabric shade preview.
          </p>
        </div>
      )}

      {/* Loading Skeleton */}
      {!isLoaded && hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
            <RotateCw className="w-4 h-4 animate-spin text-sky-600" />
            <span>Loading 3D Fabric Roll...</span>
          </div>
        </div>
      )}

      {/* Bottom Floating Interactive Bar */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none gap-2">
        {/* Active Color Pill with Live Swatch & Pattern Indicator */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm pointer-events-auto min-w-0">
          <span
            className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs inline-block shrink-0"
            style={{ backgroundColor: colorHex }}
          />
          <div className="text-left leading-none min-w-0">
            <span className="text-[11px] font-black text-slate-900 block truncate">
              {colorName}
            </span>
            <span className="text-xs text-slate-700 font-semibold truncate block">
              {activePattern === "diamond" ? "Diamond Cut Pattern" : "Smooth Finish"}
            </span>
          </div>
        </div>

        {/* Quick 3D Tool Controls with Zoom +/- & Reset (Only when WebGL active) */}
        {hasWebGL && (
          <div className="flex items-center space-x-1.5 pointer-events-auto shrink-0">
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg bg-white/95 hover:bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-900 shadow-xs transition-colors cursor-pointer text-xs font-bold"
              title="Zoom In (Close-up Macro View)"
            >
              <ZoomIn className="w-3.5 h-3.5 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg bg-white/95 hover:bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-900 shadow-xs transition-colors cursor-pointer text-xs font-bold"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={() => setIsAutoRotate((prev) => !prev)}
              className="p-1.5 rounded-lg bg-white/95 hover:bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-900 shadow-xs transition-colors cursor-pointer text-xs font-bold flex items-center space-x-1"
              title={isAutoRotate ? "Pause Auto Rotation" : "Start Auto Rotation"}
            >
              {isAutoRotate ? <Pause className="w-3.5 h-3.5 text-sky-600" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
            <button
              type="button"
              onClick={handleResetView}
              className="p-1.5 rounded-lg bg-white/95 hover:bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-900 shadow-xs transition-colors cursor-pointer text-xs font-bold"
              title="Reset 3D Angle & Zoom"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-600" />
            </button>
          </div>
        )}
      </div>

      {/* Drag & Macro Zoom Hint Overlay */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-65 hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-xs font-semibold text-slate-800 bg-white/95 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs backdrop-blur-xs">
          Drag to orbit 360° • Zoom in for macro diamond detail
        </span>
      </div>

    </div>
  );
}
