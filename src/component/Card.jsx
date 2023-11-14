import React, { useState } from "react";

function Card({ data }) {
  const [price, setprice] = useState(0);
  const [count, setcount] = useState(0);
  const discount = 10;
  const totalAmount = ((price * (100 - discount)) / 100).toFixed(2);

  const totalA = (e) => {
    setcount(e.target.value < 0 ? 0 : e.target.value);
    setprice((e.target.value < 0 ? 0 : e.target.value) * data.price);
  };
  const remove = () => {
    setprice(0);
    setcount(0);
  };

  return (
    <div>
      <div className="col px-5 backgroundClr pt-5">
        <div className=" ">
          <div className="row ">
            <div className="col-lg-3 col-12 text-center mb-2">
              <img src={data.thumbnail} className="img-fluid " alt="..." />
            </div>
            <div className="col-lg-6 col-6">
              <div className="  ">
                <h2>{data.title}</h2>
                <p>
                  <b>Description</b>
                </p>
                <p className="text-secondary">{data.description}</p>
                <p>
                  <b>Rating : </b>
                  {data.rating}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-6 ">
              <div className=" text-end ">
                <div className="d-flex justify-content-end align-items-center m-2 text-end ">
                  <div className="wrapper">
                    <input
                      type="number"
                      id="select"
                      className="SelectTag "
                      onChange={(e) => totalA(e)}
                      value={count <= 0 ? 0 : count}
                    />
                  </div>
                  <h6 className="pt-2">
                    <i className="bi bi-currency-dollar"></i>
                    {data.price.toFixed(2)}
                  </h6>
                </div>
                <button className="mt-5 RemoveButton" onClick={remove}>
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="my-4">
          <div className="d-flex justify-content-between">
            <h5 className="text-secondary">TOTAL :</h5>
            <h6>
              <i className="bi bi-currency-dollar"></i>
              {price.toFixed(2)}
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="text-secondary h6">SHIPPING :</h5>
            <h6>FREE</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="text-secondary h6">DISCOUNT :</h5>
            <h6>{discount}%</h6>
          </div>
        </div>

        <hr />

        <div className="my-4">
          <div className="d-flex justify-content-between">
            <h5>SUBTOTAL :</h5>
            <h6>
              <i className="bi bi-currency-dollar"></i>
              {totalAmount}
            </h6>
          </div>
          <div className="text-end">
            <p className="text-danger">Get Daily Cash With NespolaCard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
