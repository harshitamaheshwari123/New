import Image from 'next/image';
import type { ComponentProps } from 'react';

// Base64 encoded logo image
const logoDataUri =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgMTc0IDI1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB5PSI0LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjMiIGZpbGw9IiMwMDY2NTUiLz4KPHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSIyNCIgeT0iMTguNSIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI3MDAiPkJ1aWxkaW5nIEJoYXJhdDwvdGV4dD4KPC9zdmc+Cg==';

export const Logo = (props: Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src={logoDataUri}
    alt="Building Bharat Logo"
    width={173}
    height={24}
    unoptimized // Necessary for data URI with next/image
    {...props}
  />
);
