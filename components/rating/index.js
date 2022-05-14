import React from "react";
import style from "./Rating.module.scss";

const Rating = ({ data }) => {
  return (
    <>
      {data && data.rate && data.count && (
        <div className={style.rating}>
          <div className={style.rating_btn}>
            {data.rate}
            <img src="../assets/star.png" />
          </div>
          <div className={style.rating_count}>({data.count})</div>
        </div>
      )}
    </>
  );
};

export default Rating;
