import { useContext } from 'react';
import { _ThemeContext } from '~/contexts';

const useThemeSwitcher = () => useContext(_ThemeContext);
export default useThemeSwitcher;
