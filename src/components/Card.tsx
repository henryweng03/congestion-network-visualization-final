import { cn } from "@/lib/utils";
import React from "react";
export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "py-12 px-10 rounded-lg shadow-sm border border-slate-200 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
