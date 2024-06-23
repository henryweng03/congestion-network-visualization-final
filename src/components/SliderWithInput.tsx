import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Slider } from "./ui/slider";
import { LabeledInput } from "./LabeledInput";

// Validation function
const validateInput = (
  value: string,
  min: number,
  max: number
): string | null => {
  const num = Number(value);
  if (isNaN(num)) {
    return "Please enter a valid number";
  }
  if (num < min || num > max) {
    return `Please enter a number between ${min} and ${max}`;
  }
  return null;
};

export default function SliderWithInput({
  min,
  max,
  defaultValue,
  labelName,
}: {
  min: number;
  max: number;
  defaultValue: number;
  labelName: string;
}) {
  const [value, setValue] = useState(defaultValue.toString());
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const validationError = validateInput(newValue, min, max);

    if (validationError) {
      setError(validationError);
    } else {
      setValue(newValue);
      setError(null);
    }
  };

  return (
    <div>
      <LabeledInput
        label={labelName}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className={cn(
          error ? "border-red-600 focus-within:border-red-600 mb-1" : "mb-5"
        )}
      />

      {error && <p className="text-red-600 text-xs mb-5">{error}</p>}

      <Slider
        defaultValue={[defaultValue]}
        value={[Number(value)]}
        onValueChange={(values) => setValue(values[0].toString())}
        min={min}
        max={max}
        step={1}
        className="w-[20rem]"
      />
    </div>
  );
}

SliderWithInput.displayName = "SliderWithInput";

export { SliderWithInput };
