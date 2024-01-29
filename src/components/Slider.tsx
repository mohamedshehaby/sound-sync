"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import React from "react";

interface SlideProps {
  value?: number;
  onChange?: (value: number) => void;
  step?: number;
  max?: number;
}

const Slider: React.FC<SlideProps> = ({
  value = 1,
  onChange,
  step = 0.1,
  max = 1,
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className=" cursor-pointer relative flex items-center select-none touch-none w-full h-10 "
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={max}
      step={step}
      aria-label="Volume"
    >
      <RadixSlider.Track className=" bg-neutral-600  relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
