import React from "react";
import Container from "../../components/container";
import Rating from "../../components/rating";
import { getProduct } from "../../services/getProduct";
import { productPrice } from "../../utils/price";
import style from "./Product.module.scss";

const Product = (props) => {
  return (
    <div className={style.product}>
      <Container>
        <div className={style.product_detail_wrapper}>
          <div className={style.product_detail_left}>
            <div className={style.product_detail_image}>
              <img src={props.image} alt={props.title} />
            </div>
          </div>
          <div className={style.product_detail_right}>
            <div className={style.product_name}>{props.title}</div>
            <div className={style.price}>{productPrice(props.price)}</div>
            <div className={style.rating}>
              <Rating data={props.rating} />
            </div>
            <div className={style.description}>{props.description}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
export async function getServerSideProps(context) {
  const id = context.query.id;
  const data = await getProduct(id);
  return {
    props: { ...data },
  };
}
