import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabeledInput = React.forwardRef<HTMLInputElement, LabeledInputProps>(
  ({ label, className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "group relative flex items-center bg-white rounded-md border focus-within:border-primary border-slate-300 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <label className="block text-sm font-medium text-muted-foreground ml-2 pr-2 border-slate-300 border-r">
          {label}
        </label>
        <input
          type={type}
          ref={ref}
          {...props}
          className="px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-0 w-[10em] rounded-md"
        />
      </div>
    );
  }
);
LabeledInput.displayName = "LabeledInput";

export { LabeledInput };
