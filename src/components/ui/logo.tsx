
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white font-semibold">C</div>
      <span className="font-serif font-semibold text-2xl text-primary">Clert</span>
    </div>
  );
}
