import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../store/cart/cartActions";
import { selectCartItemsCount } from "../../store/cart/cartSelectors";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const CartIcon = ({ toggleCartHidden, cartCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  cartCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
