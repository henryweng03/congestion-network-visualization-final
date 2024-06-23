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
          "group relative flex w-min bg-white items-center rounded-md border focus-within:border-blue-900 border-slate-300 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <div className="flex items-center w-[11.5rem] bg-slate-50 pr-3 h-[36px] border-slate-300 border-r rounded-md rounded-r-none">
          <p className="text-xs font-medium text-muted-foreground ml-3">
            {label}
          </p>
        </div>

        <input
          type={type}
          ref={ref}
          {...props}
          className="px-3 py-2 text-sm flex-none focus-visible:outline-none focus-visible:ring-0 rounded-md flex-shrink w-[4rem] bg-transparent"
        />
      </div>
    );
  }
);
LabeledInput.displayName = "LabeledInput";

export { LabeledInput };
