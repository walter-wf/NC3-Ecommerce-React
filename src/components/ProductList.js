import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import Carrousel from "./Carrousel";

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          
        
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
             
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
