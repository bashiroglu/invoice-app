import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Redirect, Route } from 'react-router-dom';
import InvoiceDrawer from './components/invoice/invoiceDrawer/InvoiceDrawer';
import Layout from './components/layout/Layout';
import InvoiceDetails from './pages/invoiceDetails/InvoiceDetails';
import Invoices from './pages/invoices/Invoices';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  );
}

export default App;
