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
        "flex flex-col items-start px-6 py-6 bg-slate-50 rounded-lg shadow-md border",
        className
      )}
    >
      {children}
    </div>
  );
}
