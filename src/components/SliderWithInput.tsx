import { cn } from "@/lib/utils";
import React from "react";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";

const SliderWithInput = ({
  className,
  min,
  max,
  defaultValue,
}: {
  className?: string;
  min: number;
  max: number;
  defaultValue: number;
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

    setValue(newValue);
  };

  return (
    <div className={cn("flex flex-col items-start", className)}>
      <Input
        className="mb-2 w-20"
        value={value}
        onChange={handleChange}
        type="number"
      />

      <Slider
        defaultValue={[defaultValue]}
        value={[value]}
        onValueChange={(values) => setValue(values[0])}
        min={min}
        max={max}
        step={1}
        className="w-96"
      />
    </div>
  );
};

SliderWithInput.displayName = "SliderWithInput";

export { SliderWithInput };
