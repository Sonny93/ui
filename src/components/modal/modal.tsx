import { Fragment, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import ModalBody from '~/components/modal/_modal_body';
import ModalContainer from '~/components/modal/_modal_container';
import { ModalCloseBtn, ModalHeader } from '~/components/modal/_modal_header';
import ModalWrapper from '~/components/modal/_modal_wrapper';
import { TextEllipsis } from '~/components/text_ellipsis';
import useClickOutside from '~/hooks/use_click_outside';
import useGlobalHotkeys from '~/hooks/use_global_hotkeys';
import useShortcut from '~/hooks/use_shortcut';

export interface ModalProps {
  title?: string;
  children: ReactNode;
  opened: boolean;
  hideCloseBtn?: boolean;
  className?: string;

  close: () => void;
}

export default function Modal({
  title,
  children,
  opened = true,
  hideCloseBtn = false,
  className,
  close,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { setGlobalHotkeysEnabled } = useGlobalHotkeys();

  useClickOutside(modalRef, close);
  useShortcut('ESCAPE_KEY', close, { disableGlobalCheck: true });

  useEffect(
    () => setGlobalHotkeysEnabled(!opened),
    [opened, setGlobalHotkeysEnabled]
  );

  if (typeof window === 'undefined') {
    return <Fragment />;
  }

  return (
    opened &&
    createPortal(
      <ModalWrapper>
        <ModalContainer className={className} ref={modalRef}>
          {(!hideCloseBtn || title) && (
            <ModalHeader>
              {title && <TextEllipsis>{title}</TextEllipsis>}
              {!hideCloseBtn && (
                <ModalCloseBtn
                  onClick={close}
                  style={{ marginLeft: !title ? 'auto' : 'unset' }}
                >
                  <IoClose size={20} />
                </ModalCloseBtn>
              )}
            </ModalHeader>
          )}
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      </ModalWrapper>,
      document.body
    )
  );
}
