import React from "react";

import NavHeader from "../components/NavHeader/NavHeader.jsx";
import PizzaForm from "../components/PizzaForm/PizzaForm.jsx";
import Footer from "../components/Footer/Footer.jsx";

const OrderPage = () => {
  return (
    <>
      <NavHeader />
      <PizzaForm />
      <Footer />
    </>
  );
};

export default OrderPage;
