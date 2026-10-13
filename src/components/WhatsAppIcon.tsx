import React from "react";

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className = "w-5 h-5", size, ...props }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.14 12.37 9.73 14.82 12.16 15.87C12.74 16.12 13.19 16.27 13.55 16.38C14.13 16.57 14.66 16.54 15.08 16.48C15.54 16.41 16.51 15.89 16.71 15.33C16.92 14.77 16.92 14.29 16.86 14.19C16.79 14.09 16.63 14.03 16.39 13.91C16.14 13.79 14.92 13.19 14.69 13.11C14.47 13.03 14.3 12.99 14.14 13.23C13.97 13.48 13.51 14.03 13.37 14.19C13.23 14.35 13.1 14.37 12.85 14.25C12.61 14.13 11.82 13.87 10.88 13.04C10.15 12.39 9.65 11.59 9.51 11.35C9.37 11.1 9.49 10.97 9.61 10.85C9.72 10.74 9.86 10.56 9.98 10.42C10.1 10.27 10.14 10.17 10.22 10.01C10.3 9.84 10.26 9.7 10.2 9.58C10.14 9.46 9.65 8.25 9.44 7.76C9.24 7.28 9.04 7.34 8.88 7.33C8.73 7.33 8.56 7.33 8.53 7.33Z"
      />
    </svg>
  );
}

export function OfficialWhatsAppBadge({ className = "w-6 h-6", iconClassName = "w-4 h-4 text-white" }: { className?: string; iconClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-[#25D366] shadow-sm ${className}`}>
      <WhatsAppIcon className={iconClassName} />
    </span>
  );
}
