import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("navLink.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [])
  
  return (
    <div className="md:flex items-center py-2">
      <div onClick={() => setIsOpen(!isOpen)} className="pt-2 px-4 md:hidden">
        {isOpen ? (
          <FaBars className="text-2xl" />
        ) : (
          <FaX className="text-2xl" />
        )}
      </div>
      <div
        className={`md:flex items-center gap-6 ${isOpen ? "hidden" : "block md:bg-white bg-gray-100 w-1/2 md:px-0 px-4 py-2 rounded-md mt-2"}`}
      >
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Navbar;