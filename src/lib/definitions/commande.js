export const commande = {
  order_id: "",
  customer: {
    customer_id: "",
    name: "",
    contact: "",
    phone: "",
    email: "",
  },
  items: [
    {
      stock_item_id: "",
      name: "",
      quantity: 0,
      unit_price: 5,
      total_price: 0,
    },
  ],
  order_date: "",
  delivery_date: "",
  status: "",
  payment_status: "",
  shipping_method: "",
  tracking_number: "",
  delivery_address: {
    street: "",
    city: "",
    postal_code: "",
    country: "",
  },
  documents: [
    {
      doc_id: "",
      name: "",
      url: "",
    },
  ],
};
