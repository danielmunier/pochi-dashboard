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
  placehoolder: string;
  isMulti?: boolean;
}


const SelectInput: React.FC<SelectInputProps> = ({ name, value, onChange, options, placehoolder: placeholder, isMulti = false }) => {
  return (
    <div>
      <div>
        {placeholder}
      </div>
   
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        
        className="basic-multi-select text-black"
        placeholder={placeholder}
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectInput;
