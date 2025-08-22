import React from "react";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, options, ...props }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-lg font-semibold mb-2">
        {label}
      </label>
      <select
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
