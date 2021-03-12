import { darkTheme, lightTheme } from '../theme';
import { useEffect, useState } from 'react';

const useDarkTheme = () => {
  const [theme, setTheme] = useState('light');
  const themes = theme == 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme);
    } else {
      setTheme('light');
    }
  }, []);

  return [themes, theme, toggleTheme];
};

export default useDarkTheme;
