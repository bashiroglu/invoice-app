import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './styles/GlobalStyles';
import InvoiceDetails from './pages/invoice-details/InvoiceDetails';
import InvoiceDrawer from './components/invoiceDrawer/InvoiceDrawer';
import Invoices from './pages/invoices/Invoices';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from 'styled-components';
import useDarkTheme from './hooks/useDarkTheme';

function App() {
  const [themes, theme, toggleTheme] = useDarkTheme();
  const location = useLocation();

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <Switch location={location} key={location.pathname}>
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
            <InvoiceDetails />
          </Route>
          <Route path='/invoices/edit/:id/'>
            <InvoiceDetails />
            <InvoiceDrawer />
          </Route>
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
