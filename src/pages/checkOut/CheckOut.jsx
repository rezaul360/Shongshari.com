import React from "react";
import { useParams } from "react-router-dom";
import CheckoutHeader from "../../components/checkOut/CheckoutHeader";
import ChecoutIndex from "../../components/checkOut/ChecoutIndex";
import MainLayout from "../../components/layout/MainLayout";

const CheckOut = () => {

  return (
    <MainLayout>
      <CheckoutHeader />
      <ChecoutIndex />
    </MainLayout>
  );
};

export default CheckOut;
