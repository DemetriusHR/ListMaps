import React from 'react';
import NumberFormat from 'react-number-format';

type InputBaseBaseProps = {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

const InputNumberBase = ({ inputRef, onChange, ...props }: InputBaseBaseProps) => (
  <NumberFormat
    {...props}
    getInputRef={inputRef}
    onValueChange={(values) => {
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      });
    }}
  />
);

export default InputNumberBase;
