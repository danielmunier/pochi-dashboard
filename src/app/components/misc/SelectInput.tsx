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
  placeholder: string;
  isMulti?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, value, onChange, options, placeholder, isMulti = false }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white mb-2">{placeholder}</label>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        className="text-black"
        placeholder={placeholder}
        classNamePrefix="react-select"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: '#0e0e0e',
            borderColor: '#374151',
            color: '#ffffff',
            padding: '2px',
            boxShadow: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: '#1f2937',
            color: '#ffffff',
          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#ffffff',
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#374151',
            color: '#ffffff',
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: '#ffffff',
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: '#ffffff',
            ':hover': {
              backgroundColor: '#ffed4a',
              color: '#000000',
            },
          }),
        }}
      />
    </div>
  );
};

export default SelectInput;
