/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import Select, { FormatOptionLabelMeta } from 'react-select';
import FormField from '~/components/form/form_field';

type Option = { label: string | number; value: string | number };

interface SelectorProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string;
  value: T;
  name: string;
  errors?: string[];
  options: Option[];
  onChangeCallback?: (value: number | string) => void;
  formatOptionLabel?: (
    data: Option,
    formatOptionLabelMeta: FormatOptionLabelMeta<Option>
  ) => ReactNode;
}

export default function Selector<T = string | number>({
  name,
  label,
  value,
  options,
  onChangeCallback,
  formatOptionLabel,
  required = false,
  ...props
}: SelectorProps<T>): JSX.Element {
  const theme = useTheme();
  const [selectorValue, setSelectorValue] = useState<Option | null>(
    () => options.find((option) => option.value === value) ?? null
  );

  const handleChange = (selectedOption: Option) => {
    onChangeCallback?.(selectedOption.value);
    setSelectorValue(selectedOption);
  };

  return (
    <FormField required={required}>
      {label && (
        <label htmlFor={name} title={`${name} field`}>
          {label}
        </label>
      )}
      <Select<Option>
        onChange={(newValue) => handleChange(newValue as Option)}
        options={options}
        isDisabled={props.disabled}
        menuPlacement="auto"
        formatOptionLabel={
          formatOptionLabel
            ? (val, formatOptionLabelMeta) =>
                formatOptionLabel(val, formatOptionLabelMeta)
            : undefined
        }
        css={{ width: '100%', color: theme.colors.black }}
        className={props.className}
        value={selectorValue}
      />
    </FormField>
  );
}
