import React from "react";

const Container = (props) => {
  return (
    <div style={{ maxWidth: "1400px", width: "90%", margin: "auto" }}>
      {props.children}
    </div>
  );
};

export default Container;
