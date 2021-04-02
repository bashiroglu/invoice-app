export const fetchInvoices = async () => {
  const res = await fetch(process.env.REACT_APP_API_INVOICES);
  if (!res.ok) throw new Error('Something went wrong!');
  return res.json();
};
