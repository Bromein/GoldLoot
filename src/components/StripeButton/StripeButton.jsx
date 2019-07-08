import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  //stripe requires cents opposed to dollar amounts
  const priceConversionForStripe = price * 100;
  const publishableKey = "pk_test_rJCWhmr5KzEvK9sxcd2oXa9800tixcSrXS";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Gold Loot Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      amount={priceConversionForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
