"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-neutral-950 text-slate-50 dark:bg-black",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#000000_10%,#dc2626_15%,#059669_20%,#b91c1c_25%,#10b981_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#0a0a0a_0%,#0a0a0a_7%,transparent_10%,transparent_12%,#0a0a0a_16%)",

              "--red-500": "#ef4444",
              "--red-600": "#dc2626",
              "--red-800": "#991b1b",
              "--green-500": "#10b981",
              "--green-600": "#059669",
              "--green-700": "#047857",
              "--black": "#000000",
              "--white": "#0a0a0a",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-60 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,var(--red-600)_15%,var(--green-600)_20%,var(--red-800)_25%,var(--green-500)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-screen after:content-[""]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
