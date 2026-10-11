import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'light', toggle: () => {} });
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    try { const saved = localStorage.getItem('albaa-theme'); setTheme(saved === 'dark' ? 'dark' : 'light'); } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);
  const toggle = () => setTheme(current => {
    const next = current === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('albaa-theme', next); } catch { /* Continue without persistence. */ }
    return next;
  });
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
