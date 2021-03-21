import { Redirect, Route, Switch } from 'react-router-dom';

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
        <Route exact path='/'>
          <Redirect to='/invoices/all' />
        </Route>
        <Route path='/invoices/new'>
          <Invoices />
          <InvoiceDrawer />
        </Route>
        <Route exact path='/invoices/all'>
          <Invoices />
        </Route>
        <Route exact path='/invoices/all/:id'>
          <InvoiceID />
        </Route>
        <Route path='/invoices/edit/:id/'>
          <InvoiceID />
          <InvoiceDrawer />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
