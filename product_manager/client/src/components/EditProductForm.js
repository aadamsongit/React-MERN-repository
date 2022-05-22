import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// import { response } from "express";
import { useHistory } from "react-router-dom";

const EditProductForm = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((response) => {
        console.log("response when getting one product");
        setFormInfo(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const [formErrors, setFormErrors] = useState({
    title: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    console.log("changing the form");
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, formInfo)
      .then((response) => {
        console.log("response from the put request", response);
        // setFormErrors(response.data.err.errors);
        history.push("/");
      })
      .catch((err) => console.log(err));

    // }
    // })
  };

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <Link to="/product/"></Link>
          <label htmlFor="">Title</label>
          <input
            onChange={changeHandler}
            type="text"
            name="title"
            id=""
            className="form-control"
            value={formInfo.title}
          ></input>
          <p className="text-danger">{formErrors.title.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            onChange={changeHandler}
            type="number"
            name="price"
            id=""
            className="form-control"
            value={formInfo.price}
          ></input>
          <p className="text-danger">{formErrors.price.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input
            onChange={changeHandler}
            type="text"
            name="description"
            id=""
            className="form-control"
            value={formInfo.description}
          ></input>
          <p className="text-danger">{formErrors.description.message}</p>
        </div>
        <input type="submit" value="Update" className="btn btn-success"></input>
      </form>
    </div>
  );
};

export default EditProductForm;
