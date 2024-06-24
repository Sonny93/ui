import { Button } from '~/components/button';
import Modal, { ModalProps } from '~/components/modal/modal';
import useToggle from '~/hooks/use_toggle';

export default function ExampleModal(
  props: Omit<ModalProps, 'close' | 'opened'>
) {
  const { toggle, isShowing, close } = useToggle();
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
      <Button onClick={() => toggle()}>{props.title ?? 'Open modal'}</Button>
      <Modal close={close} opened={isShowing} {...props}>
        content
      </Modal>
    </div>
  );
}
