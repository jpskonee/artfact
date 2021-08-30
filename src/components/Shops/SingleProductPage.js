import React, { useState } from "react";
import Footer from "../partials/Footer";
import ShopNavBar from "./ShopNavBar";
import products from "../../data";
import img3 from "../assets/img/3.png";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: theme.shadows[5],
    padding: "5rem 2rem",
  },
  productName: {
    fontFamily: "roboto",
    fontSize: "3rem",
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: "1.5rem",
  },
  btnDiv: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginTop: "1rem",
  },
  btnBtn: {
    background: "gray",
    color: "white",
    margin: "0.5rem 1rem",
    padding: "0.1rem 0.5rem",
  },
  btnNum: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  btnBuy: {
    background: "green",
    color: "white",
    padding: "0.4rem 1.5rem",
    borderRadius: "3rem",
    marginTop: "2rem",
  },
}));

function SingleProductPage(props) {
  const classes = useStyles();
  const [productQuant, setProductQuant] = useState(1);

  const selectedProductId = props.match.params.id;
  const selectedProduct = products.filter(
    (product) => product.product_id === selectedProductId
  );

  const handleSub = () => {
    if (productQuant > 1) {
      setProductQuant(productQuant - 1);
    }
  };
  const handleAdd = () => {
    setProductQuant(productQuant + 1);
  };

  const handleBuy = () => {
    alert("Clicked");
  };

  return (
    <div>
      <ShopNavBar />
      <section style={{ margin: "10rem 1rem 4rem" }} id="shop">
        <div class="container" data-aos="fade-up">
          <div className={classes.paper}>
            {selectedProduct.map((product) => {
              return (
                <Grid container>
                  <Grid item lg={7} xs={12}>
                    <img src={img3} alt="nft" style={{ width: "90%" }} />
                  </Grid>
                  <Grid item lg={5} xs={12}>
                    <div className={classes.productName}>
                      {product.product_name}
                    </div>
                    <div>
                      {" "}
                      <b>Price:</b>{" "}
                      <span className={classes.productPrice}>
                        ${product.product_price}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <b>Description:</b> {product.product_desp}
                    </div>
                    <div className={classes.btnDiv}>
                      <button onClick={handleSub} className={classes.btnBtn}>
                        -
                      </button>
                      <div className={classes.btnNum}>{productQuant}</div>
                      <button onClick={handleAdd} className={classes.btnBtn}>
                        +
                      </button>
                    </div>
                    <div>
                      {" "}
                      <b>Sum Total:</b>{" "}
                      <span className={classes.productPrice}>
                        ${productQuant * product.product_price}
                      </span>
                    </div>
                    <button onClick={handleBuy} className={classes.btnBuy}>
                      {" "}
                      Buy
                    </button>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SingleProductPage;
