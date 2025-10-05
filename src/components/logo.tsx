import Image from 'next/image';
import type { ComponentProps } from 'react';

// Base64 encoded logo image
const logoDataUri =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAZCAYAAABY9GkOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHySURBVHhe7ZtNassyEEB10Qf4bC3Yt9g3WJHv27AYK2xJ/kQoIM2ksFzC0x+eAEb4JSQLRpIkSZIkSZL0F2i/Xg9vb+9Iz/M6j+MEGNCb6xruni/zPJ/t7OxQPp8HcBzH8Xq9vr6+xJrqdDq6urrays/PD43j+L68vkan0xkbG6NCoUCr1Vqv1/P5fHw+n0wmQ61WQ6vV0mq1+L7P5/OhVCppPp/T6XTm5+f5fD7x/f2dy+XC3d2dkZGR6urq6Ozs1Gq1zM/P02g0lEqlxGIxWSwWubm5oVQqUSqVxGJxaGhoaG5uZrPZkMlkEAhEbm4uFosFjUYjDIdDPp/v9vaG3d1d3t/f2djYwGazUSwWubq6YrPZMDc3h8PhkMvlCoVCTCYTDocDjUYjFosFg8GAw+EACgSCSCRisVjQarU8Hg+Hw4HFYkEikXA4HGasN+fzeVwuFxaLBZfLhcPhwGaz4fP54PF4MBqNcDgc2O12dDodubm5oFQqEQqFeDweFosFq9UKh8OBx+PBbreh1WqxWq1YLBaPx4PH44HH4wE4HA4sFovP50Ov15PNZmM2m6FQKBAIBAKBgFarxWq1YrFYMBgMYLFYMBqNMJvNuN1uBYNBq9XCZrNhMplgsVhwOp1pNBpMJhNCoRB2u10sFkMmk5HL5ZqamigUCpRKpbm5OVwuF6fTifXN7u4ub7/d3d29vr7G5/MBnE6nVCp1cnKCRCLh8/kUCgWVSmWz2Zyfn2OxWMxms5mZmVgsFsPhMJfLpVQqUSgUZHd3V6vV0m630+v13G43Ho+H2+0GkL75faIkSZIkSZIk/R/5BQD2/Jsnf5aEAAAAAElFTkSuQmCC';

export const Logo = (props: Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src={logoDataUri}
    alt="Building Bharat Logo"
    width={173}
    height={25}
    unoptimized // Necessary for data URI with next/image
    {...props}
  />
);
