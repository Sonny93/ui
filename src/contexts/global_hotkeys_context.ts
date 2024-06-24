import { createContext } from 'react';

type GlobalHotkeysContext = {
  globalHotkeysEnabled: boolean;
  setGlobalHotkeysEnabled: (value: boolean) => void;
};

const iGlobalHotkeysContextState = {
  globalHotkeysEnabled: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGlobalHotkeysEnabled: (_: boolean) => {},
};

const GlobalHotkeysContext = createContext<GlobalHotkeysContext>(
  iGlobalHotkeysContextState
);

export default GlobalHotkeysContext;
