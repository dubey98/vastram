import CheckoutLayout from "@/components/CheckoutLayout";
import React from "react";

const payment = () => {
  return <div>payment</div>;
};

payment.getLayout = function (page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default payment;
