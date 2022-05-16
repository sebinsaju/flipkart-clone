import Link from "next/link";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../../components/product-card";
import { getProducts } from "../../services/getProducts";
import http from "../../utils/instance";
import style from "./Products.module.scss";
const Products = (props) => {
  const { data } = props;
  return (
    <div className={style.products}>
      <Container>
        <div className={style.products_wrapper}>
          <h1 className={style.title}>Products</h1>
          {/* {JSON.stringify(data)} */}
          <div className={style.product_listing}>
            {data.map((product, index) => {
              return (
                <div key={index}>
                  <Link href={`/product/${product._id}`}>
                    <a>
                      <ProductCard data={product} />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Products;
export async function getServerSideProps(context) {
  const data = await getProducts();
  return {
    props: { data },
  };
}
