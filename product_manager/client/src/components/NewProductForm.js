import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewProductForm = (props) => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description: "",
  });

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
      .post("http://localhost:8000/api/products", formInfo)
      .then((response) => {
        console.log(response);

        if (response.data.err) {
          setFormErrors(response.data.err.errors);
        } else {
          props.setFormSubmitted(!props.formSubmitted);

          setFormInfo({
            title: "",
            price: "",
            description: "",
          });
          setFormErrors({
            title: "",
            price: "",
            description: "",
          });
        }
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
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
        <input type="submit" value="Create" className="btn btn-success"></input>
      </form>
    </div>
  );
};

export default NewProductForm;
