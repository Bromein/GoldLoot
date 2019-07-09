import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { clearCartOnPurchase } from "../../store/cart/cartActions";

const StripeButton = ({ price, clearCart }) => {
  //stripe requires cents opposed to dollar amounts
  const priceConversionForStripe = price * 100;
  const publishableKey = "pk_test_rJCWhmr5KzEvK9sxcd2oXa9800tixcSrXS";

  const onToken = token => {
    console.log("im being called!");
    alert("Payment Successful");
    clearCart();
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCartOnPurchase())
});
export default connect(
  null,
  mapDispatchToProps
)(StripeButton);
