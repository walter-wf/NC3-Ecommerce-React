import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Mi carro de compras</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Vaciar el Carrito
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">No tienes articulos en el carro de compras</div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);
