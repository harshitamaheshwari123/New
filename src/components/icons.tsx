import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.333 4L5 9.333V20h14V9.333L12.333 4zM19 20h-4.333v-5.333H9.667V20H5" stroke="none" fill="hsl(var(--accent))" />
    <path d="M11.5 14.667H9.667V20h4.666v-5.333h-2.833z" stroke="none" fill="hsl(var(--primary))" />
  </svg>
);
