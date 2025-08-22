import React, { useState, useEffect } from "react";
import Select from "../Select";

interface CascadingSelectProps {
  mainLabel: string;
  mainOptions: { value: string; label: string }[];
  subLabel: string;
  subOptionsMap: Record<string, { value: string; label: string }[]>;
  onMainChange?: (value: string) => void;
  onSubChange?: (value: string) => void;
  mainValue?: string;
  subValue?: string;
}

export default function CascadingSelect({
  mainLabel,
  mainOptions,
  subLabel,
  subOptionsMap,
  onMainChange,
  onSubChange,
  mainValue,
  subValue,
}: CascadingSelectProps) {
  const [selectedMain, setSelectedMain] = useState(mainValue || "");
  const [selectedSub, setSelectedSub] = useState(subValue || "");

  useEffect(() => {
    if (selectedMain !== mainValue) {
      setSelectedSub("");
    }
  }, [selectedMain, mainValue]);

  const handleMainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMain(value);
    setSelectedSub("");
    onMainChange?.(value);
  };

  const handleSubChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSub(value);
    onSubChange?.(value);
  };

  const availableSubOptions = selectedMain
    ? subOptionsMap[selectedMain] || []
    : [];

  return (
    <div>
      <Select
        label={mainLabel}
        options={mainOptions}
        onChange={handleMainChange}
        value={selectedMain}
      />

      {availableSubOptions.length > 0 && (
        <Select
          label={subLabel}
          options={availableSubOptions}
          onChange={handleSubChange}
          value={selectedSub}
        />
      )}
    </div>
  );
}
