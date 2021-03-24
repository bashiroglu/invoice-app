import { Redirect, Route } from 'react-router-dom';
import InvoiceDrawer from './components/invoice/invoiceDrawer/InvoiceDrawer';
import Layout from './components/layout/Layout';
import InvoiceDetails from './pages/invoice-details/InvoiceDetails';
import Invoices from './pages/invoices/Invoices';

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
