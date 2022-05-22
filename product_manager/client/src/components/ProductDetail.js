import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((response) => {
        console.log("response when getting one product");
        setProductInfo(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = () => {
    console.log("deleting product", id);
    axios
      .delete(`http://localhost:8000/api/products/delete/${id}`)
      .then((response) => {
        console.log("response after deleting", response);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Details about products below</h1>
      <p>Id of product: {id}</p>
      <p>Title: {productInfo.title}</p>
      <p>Price: {productInfo.price}</p>
      <p>Description: {productInfo.description}</p>

      <button onClick={deleteProduct} className="btn btn-danger">
        Delete {productInfo.title}
      </button>
    </div>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
