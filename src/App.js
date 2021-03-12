import GlobalStyle from './styles/GlobalStyles';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from 'styled-components';
import useDarkTheme from './hooks/useDarkTheme';

function App() {
  const [themes, theme, toggleTheme] = useDarkTheme();

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
