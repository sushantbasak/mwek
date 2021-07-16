import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ totalCost, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} CheckoutItem={cartItem} />
    ))}

    <div className="total">
      <span>Total Cost: ${totalCost}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalCost: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
