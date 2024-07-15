// components/SelectInput.tsx
import React from "react";

interface SelectInputProps {
  name: string;
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { id: string; name: string }[];
  label: string;
  disabledOptionText: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, value, onChange, options, label, disabledOptionText }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{label}</h3>
      <select
        className="bg-gray-800 text-white rounded-lg p-2 mb-4"
        name={name}
        value={value || ""}
        onChange={onChange}
      >
        <option value="" disabled>{disabledOptionText}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
