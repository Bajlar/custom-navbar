import React from "react";

const Item = ({ item }) => {
  const { name, path } = item;
  return (
    <li className="list-none text-lg font-bold">
      <a className="hover:text-red-500" href={path}>
        {name}
      </a>
    </li>
  );
};

export default Item;
