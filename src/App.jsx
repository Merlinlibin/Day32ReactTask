import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./component/Card";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const dataContext = createContext();

function App() {
  const[total,settotal]=useState(0)
  const card = useSelector(state => state);
 const dispatch = useDispatch();
console.log(card);
  return (
    <div className="container">
      <div className="row ">
        {card.map((data, i) => (
          <Card key={i} data={data} total={total} settotal={settotal} />
        ))}
      </div>
    </div>
  );
}

export { App as default, dataContext };
