import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import InvoiceDrawer from './components/invoiceDrawer/InvoiceDrawer';
import InvoiceID from './components/invoiceID/InvoiceID';
import Invoices from './pages/invoices/Invoices';
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
        <Route
          path={['/invoices', '/invoices/new']}
          exact
          component={Invoices}
        />
      </Switch>
      <Route path='/invoices/:id' component={InvoiceID} />
      <Route path='/invoices/:id/edit' component={InvoiceDrawer} />
    </ThemeProvider>
  );
}

export default App;
