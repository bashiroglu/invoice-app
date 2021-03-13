import GlobalStyle from './styles/GlobalStyles';
import Invoices from './pages/Invoices/Invoices';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from 'styled-components';
import useDarkTheme from './hooks/useDarkTheme';

function App() {
  const [themes, theme, toggleTheme] = useDarkTheme();

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <Invoices />
    </ThemeProvider>
  );
}

export default App;
