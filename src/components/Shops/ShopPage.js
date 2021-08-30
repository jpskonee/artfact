import React from "react";
import Footer from "../partials/Footer";
import NftShops from "./NftShops";
import ShopNavBar from "./ShopNavBar";

function ShopPage() {
  return (
    <div>
      <ShopNavBar />
      <NftShops />
      <Footer />
    </div>
  );
}

export default ShopPage;
