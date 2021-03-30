import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import InputNumberBase from './InputNumberBase';

type InputNumberProps = {
  mask?: string | string[];
  format?: string;
  allowNegative?: boolean;
  allowEmptyFormatting?: boolean;
} & TextFieldProps;

const InputNumber = ({
  InputProps,
  inputProps,
  mask,
  format,
  allowNegative,
  allowEmptyFormatting,
  ...props
}: InputNumberProps) => (
  <TextField
    {...props}
    InputProps={{
      ...InputProps,
      // eslint-disable-next-line
      inputComponent: InputNumberBase as any,
      inputProps: {
        mask,
        format,
        allowNegative,
        allowEmptyFormatting,
        // Importante para manter a funcionalidade do NumberFormat também para Safari/IOS
        inputMode: 'decimal',
        ...inputProps,
      },
    }}
  />
);

export default InputNumber;
