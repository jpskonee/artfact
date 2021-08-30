import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import img3 from "../assets/img/3.png";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: "90%",
//     backgroundColor: "lightgray",
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

function ShopCart(props) {
  // const classes = useStyles();
  const { product_name, product_price, product_size, id } = props;
  console.log(props);

  return (
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="100">
        <Link to={`/product/${id}`}>
          <img src={img3} alt="Artfact NFT" class="img-fluid" width="100%" />
        </Link>
        <div
          style={{
            position: "absolute",
            top: "0.8rem",
            right: "0.8rem",
            background: "#ff006a",
            color: "white",
            padding: "0.4rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          <Link id="buy-btn" to={`/product/${id}`}>
            BUY
          </Link>
        </div>
        <div id="toAbout"></div>
        <div class="details">
          <h3>
            <a href="speaker-details.html">
              {product_name} {product_size}
            </a>
          </h3>

          <p>${product_price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
