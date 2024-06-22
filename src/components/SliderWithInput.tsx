import { cn } from "@/lib/utils";
import React from "react";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { LabeledInput } from "./LabeledInput";

const SliderWithInput = ({
  className,
  min,
  max,
  defaultValue,
  labelName,
}: {
  className?: string;
  min: number;
  max: number;
  defaultValue: number;
  labelName: string;
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

    setValue(newValue);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start px-6 py-6 bg-slate-50 rounded-lg shadow-md border",
        className
      )}
    >
      <LabeledInput
        label={labelName}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="mb-3"
      />

      <Slider
        defaultValue={[defaultValue]}
        value={[value]}
        onValueChange={(values) => setValue(values[0])}
        min={min}
        max={max}
        step={1}
        className="w-[24rem]"
      />
    </div>
  );
};

SliderWithInput.displayName = "SliderWithInput";

export { SliderWithInput };
