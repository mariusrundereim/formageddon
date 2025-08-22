import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-lg font-semibold mb-2">
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
