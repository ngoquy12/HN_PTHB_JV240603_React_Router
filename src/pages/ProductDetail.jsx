import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  //   console.log(window.location.pathname.split("/")[2]);

  const { state } = useLocation();

  const param = useParams();

  console.log("param: ", param);

  return (
    <div>
      <h3>ProductDetail</h3>
      <h3>Id: {param.productId}</h3>
      <h3>Name: {param.productName}</h3>
      <h3>Content: {state}</h3>
    </div>
  );
}
