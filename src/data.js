import { v4 as uuidv4 } from "uuid";
import img1 from "../src/components/assets/img/1.png";
import img2 from "../src/components/assets/img/2.png";
import img3 from "../src/components/assets/img/3.png";

const products = [
  {
    product_id: uuidv4(),
    product_name: "Artifact",
    product_size: "3.5 Inch",
    product_price: 199,
    product_desp:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    product_img: img1,
  },
  {
    product_id: uuidv4(),
    product_name: "Artifact",
    product_size: "4.5 Inch",
    product_price: 200,
    product_desp:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    product_img: img2,
  },
  {
    product_id: uuidv4(),
    product_name: "Artifact",
    product_size: "2.5 Inch",
    product_price: 175,
    product_desp:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    product_img: img3,
  },
];

export default products;
