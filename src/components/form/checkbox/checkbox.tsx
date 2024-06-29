/** @jsxImportSource @emotion/react */

import { ChangeEvent, Fragment, InputHTMLAttributes, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import FormField, { FormFieldProps } from '~/components/form/form_field';
import FormFieldError from '~/components/form/form_field_error';

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement> & FormFieldProps,
    'onChange'
  > {
  label: string;
  name: string;
  checked: boolean;
  errors?: string[];
  onChange?: (name: string, checked: boolean) => void;
}

export default function Checkbox({
  name,
  label,
  checked = false,
  errors = [],
  onChange,
  required = false,
  reverse,
  inline,
  ...props
}: InputProps): JSX.Element {
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(checked);

  if (typeof window === 'undefined') return <Fragment />;

  function _onChange({ target }: ChangeEvent<HTMLInputElement>) {
    setCheckboxChecked(target.checked);
    if (onChange) {
      onChange(target.name, target.checked);
    }
  }

  return (
    <FormField inline={inline} reverse={reverse} required={required}>
      <label htmlFor={name} title={label}>
        {label}
      </label>
      <Toggle
        {...props}
        onChange={_onChange}
        checked={checkboxChecked}
        placeholder={props.placeholder ?? 'Type something...'}
        name={name}
        id={name}
        css={{ width: 'fit-content' }}
      />
      {errors.length > 0 &&
        errors.map((error) => (
          <FormFieldError key={error}>{error}</FormFieldError>
        ))}
    </FormField>
  );
}
