import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 24"
    fill="none"
    {...props}
  >
    <rect width="16" height="16" x="0" y="4" fill="hsl(var(--primary))" rx="3" />
    <text
      x="24"
      y="18"
      fill="currentColor"
      fontFamily="Poppins, sans-serif"
      fontSize="16"
      fontWeight="bold"
    >
      Building Bharat
    </text>
  </svg>
);
