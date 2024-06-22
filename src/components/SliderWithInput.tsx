import { cn } from "@/lib/utils";
import React from "react";
import { Slider } from "./ui/slider";
import { LabeledInput } from "./LabeledInput";

const SliderWithInput = ({
  min,
  max,
  defaultValue,
  labelName,
}: {
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
    <div>
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
