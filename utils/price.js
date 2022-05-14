export const productPrice = (price) => {
  if (!price) {
    return "₹.0";
  } else {
    return "₹" + price;
  }
};
