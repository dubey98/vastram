import CheckoutLayout from "@/components/CheckoutLayout";
import React from "react";

const add = () => {
  return <div>add</div>;
};

add.getLayout = function (page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default add;
