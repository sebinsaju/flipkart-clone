import React from "react";
import { productPrice } from "../../utils/price";
import Rating from "../rating";
import style from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
  return (
    <div className={style.product_card}>
      {/* {JSON.stringify(data)} */}
      <div className={style.thumbnail}>
        <div className={style.image_wrapper}>
          <img
            src="../assets/square.svg"
            className={style.square}
            alt="square"
          />
          <img src={data.image} className={style.product_thmb} alt="product" />
        </div>
      </div>
      <div className={style.product_card_details}>
        <div className={style.title}>{data.name}</div>
        <div className={style.description}>{data.description}</div>
       {data.rating && <div className={style.rating}>
          <Rating data={data.rating} />
        </div>}
        {data.price && <div className={style.product_price}>{productPrice(data.price)}</div>}
        {/* {data.category && <div className={style.product_category}>{data.category}</div>} */}
      </div>
    </div>
  );
};

export default ProductCard;
