import React from "react";
import ShopCart from "./ShopCart";
import products from "../../data";

function NftShops() {
  return (
    <div>
      <section style={{ margin: "6rem 0" }} id="shop">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>SHOP NOW</h2>
            <p>Exclusive Artfact drops</p>
          </div>

          <div className="row">
            {products.map((product) => {
              return (
                <ShopCart
                  id={product.product_id}
                  product_name={product.product_name}
                  product_size={product.product_size}
                  product_price={product.product_price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NftShops;
