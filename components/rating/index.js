import React from "react";
import style from "./Rating.module.scss";

const Rating = ({ data }) => {
  return (
    <>
      {data && (
        <div className={style.rating}>
          <div className={style.rating_btn}>
            {data}
            <img src="../assets/star.png" />
          </div>
         {data.count &&  <div className={style.rating_count}>({data.count})</div>}
        </div>
      )}
    </>
  );
};

export default Rating;
