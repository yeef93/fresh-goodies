"use client";

import React from "react";

interface NavbarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ categories, activeCategory, setActiveCategory }) => {
  if (!categories) return null; // Add this line to handle undefined categories

  return (
    <div className=" w-screen border-b border-gray-200 px-5">
      <div className="flex flex-wrap  gap-2">
        <div
          onClick={() => setActiveCategory("")}
          className={`px-4 text-nowrap ${!activeCategory ? 'font-bold border-b-2 border-gray-600' : ''}`}
        >
          All
        </div>
        {categories.map((item, index) => (
          <div
            onClick={() => setActiveCategory(item)}
            className={`px-4 text-nowrap ${item === activeCategory ? 'font-bold border-b-2 border-gray-600' : ''}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
