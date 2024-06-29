/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import { InputHTMLAttributes, ReactNode } from 'react';
import Select, {
  FormatOptionLabelMeta,
  GroupBase,
  OptionsOrGroups,
  PropsValue,
} from 'react-select';
import FormField from '~/components/form/form_field';

type Option = { label: string | number; value: string | number };

interface SelectorProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  name: string;
  errors?: string[];
  options: OptionsOrGroups<Option, GroupBase<Option>>;
  onChangeCallback?: (value: number | string) => void;
  formatOptionLabel?: (
    data: Option,
    formatOptionLabelMeta: FormatOptionLabelMeta<Option>
  ) => ReactNode;
}

export default function Selector({
  name,
  label,
  options,
  onChangeCallback,
  formatOptionLabel,
  required = false,
  ...props
}: SelectorProps): JSX.Element {
  const theme = useTheme();
  const handleChange = (selectedOption: Option) =>
    onChangeCallback?.(selectedOption.value);

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
        defaultValue={options[0] as PropsValue<Option>}
      />
    </FormField>
  );
}
