import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export const WaveTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    {...props}
    preserveAspectRatio="none"
  >
    <path
      d="M1440 24V0H0v24c240 32 480 48 720 48s480-16 720-48z"
      fill="currentColor"
    />
  </svg>
);

export const WaveBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    {...props}
    preserveAspectRatio="none"
  >
    <path
      d="M0 96V120h1440V96c-240-32-480-48-720-48S240 64 0 96z"
      fill="currentColor"
    />
  </svg>
);
