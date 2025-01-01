
import { createContext, useContext } from 'react';
import { theme } from '../theme';


const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);