import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import NewProductForm from "./NewProductForm";

const AllProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((response) => {
        console.log("response when getting all products", response.data);
        setAllProducts(response.data);
      })
      .catch((err) => console.log("err"));
  }, [props.formSubmitted, deleteToggle]);

  const deleteProduct = (id) => {
    console.log("deleting product", id);
    axios
      .delete(`http://localhost:8000/api/products/delete/${id}`)
      .then((response) => {
        console.log("response after deleting", response);
        setDeleteToggle(!deleteToggle);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Here are all the products</h1>
      {allProducts &&
        allProducts.map((product, i) => {
          return (
            <>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <Link to={`/product/${product._id}`}>
                      Title: {product.title}
                    </Link>
                  </p>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">
                    Description: {product.description}
                  </p>
                  <p>
                    <button
                      onClick={(e) => deleteProduct(product._id)}
                      className="btn btn-danger"
                    >
                      Delete {product.title}
                    </button>
                    |
                    <Link to={`/edit/${product._id}`} className="btn btn-info">
                      Edit
                    </Link>
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default AllProducts;
