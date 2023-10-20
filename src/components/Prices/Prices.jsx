import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  const handleDetails = (id) => {
    toast("that's awesome!");
    // console.log(id);
  };

  return (
    <div className="md:w-10/12 mx-auto px-4 mt-4 grid md:grid-cols-3 gap-4">
      {prices.map((item) => (
        <SingleCart
          key={item.id}
          item={item}
          handleDetails={handleDetails}
        ></SingleCart>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Prices;
