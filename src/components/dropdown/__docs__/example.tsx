import Dropdown, { DropdownProps } from '~/components/dropdown/dropdown';
import { DropdownItemButton } from '~/components/dropdown/dropdown_item';

export default function ExampleDropdown(
  props: Omit<DropdownProps, 'children' | 'className'>
) {
  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Dropdown {...props}>
        <DropdownItemButton>Item 1</DropdownItemButton>
        <DropdownItemButton>Item 2</DropdownItemButton>
        <DropdownItemButton>Item 3</DropdownItemButton>
      </Dropdown>
    </div>
  );
}
