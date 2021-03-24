import { Redirect, Route } from 'react-router-dom';

import InvoiceDetails from './pages/invoice-details/InvoiceDetails';
import InvoiceDrawer from './components/invoiceDrawer/InvoiceDrawer';
import Invoices from './pages/invoices/Invoices';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
