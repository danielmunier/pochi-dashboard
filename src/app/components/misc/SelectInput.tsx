import React from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  value: SingleValue<Option> | MultiValue<Option> | any;
  onChange: (newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: any) => void;
  options: Option[];
  label: string;
  isMulti?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, value, onChange, options, label, isMulti = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-white mb-2">
        {label}
      </label>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        className="basic-multi-select text-black"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectInput;
