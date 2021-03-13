import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import InvoiceID from './components/InvoiceID/InvoiceID';
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
      <Switch>
        <Route exact path='/' component={Invoices} />
        <Route exact path='/invoice/:id' component={InvoiceID} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
