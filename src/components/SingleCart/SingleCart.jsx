import React from 'react';
import { FaCheck } from "react-icons/fa";

const SingleCart = ({ item, handleDetails }) => {
  const { name, price, features, id } = item;
  return (
    <div className="border-2 p-4 flex flex-col">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-5xl font-bold shadow-md py-1 my-2 bg-gray-100 text-orange-500 text-center">
        {price}
      </p>
      <p className="text-2xl font-bold underline">Features:</p>
      <div className="text-lg my-2">
        {features?.map((feature, index) => (
          <p key={index} className="flex items-center gap-2">
            <span>
              <FaCheck className="text-green-500"></FaCheck>
            </span>
            {feature}
          </p>
        ))}
      </div>
      <button
        onClick={() => handleDetails(id)}
        className="btn bg-orange-500 hover:bg-green-500 py-2 px-4 text-white font-semibold text-lg rounded-xl w-full mt-auto"
      >
        Details
      </button>
    </div>
  );
};

export default SingleCart;