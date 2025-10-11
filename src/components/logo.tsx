// components/logo.tsx
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LogoProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  scrolled?: boolean;
}

export const Logo = ({ className, scrolled = false, ...rest }: LogoProps) => {
  const logoSrc = scrolled ? "/bharat.png" : "/logo.jpg";

  return (
    <img
      src={logoSrc}
      alt="Building Bharat Logo"
      className={cn("transition-all duration-300", className)}
      {...rest}
    />
  );
};
