import { useState } from "react";

import bruschetta from "../assets/images/Menu/bruschetta.jpg";
import burger from "../assets/images/Menu/burger.jpg";
import cheesetoast from "../assets/images/Menu/cheesetoast.jpg";
import eggsucuk from "../assets/images/Menu/eggsucuk.jpg";
import fries from "../assets/images/Menu/fries.jpg";
import lemonade from "../assets/images/Menu/lemonadjuice.jpg";
import menemen from "../assets/images/Menu/menemen.jpg";
import mojito from "../assets/images/Menu/mojito.jpg";
import nuggets from "../assets/images/Menu/nuggets.jpg";
import orangejuice from "../assets/images/Menu/orangejuice.jpg";
import pancakes from "../assets/images/Menu/pancakes.jpg";
import pizza from "../assets/images/Menu/pizza.jpg";
import plov from "../assets/images/Menu/plov.jpg";
import omlet from "../assets/images/Menu/omlet.jpg";
import sangria from "../assets/images/Menu/sangria.jpg";
import sezar from "../assets/images/Menu/sezarsalad.jpg";
import schnitzel from "../assets/images/Menu/shcnitzel.jpg";
import spaghetti from "../assets/images/Menu/spaghetti.jpg";
import steak from "../assets/images/Menu/steak.jpg";
import tea from "../assets/images/Menu/tea.jpg";

export default function Menu() {
  const [filter, setFilter] = useState("Hamısı");

  const menuItems = [
    { image: omlet, name: "Tərəvəzli omlet", category: "Səhər yeməkləri", price: "8 AZN" },
    { image: cheesetoast, name: "Pendirli tost", category: "Səhər yeməkləri", price: "6 AZN" },
    { image: pancakes, name: "Pankek", category: "Səhər yeməkləri", price: "9 AZN" },
    { image: menemen, name: "Menemen", category: "Səhər yeməkləri", price: "10 AZN" },
    { image: eggsucuk, name: "Sucuklu yumurta", category: "Səhər yeməkləri", price: "11 AZN" },

    { image: sezar, name: "Sezar salatı", category: "Qəlyanaltılar", price: "12 AZN" },
    { image: fries, name: "Kartof fri", category: "Qəlyanaltılar", price: "7 AZN" },
    { image: nuggets, name: "Toyuq naggets", category: "Qəlyanaltılar", price: "10 AZN" },
    { image: bruschetta, name: "Brusketta", category: "Qəlyanaltılar", price: "9 AZN" },
    { image: pizza, name: "Mini pizza", category: "Qəlyanaltılar", price: "13 AZN" },

    { image: steak, name: "Steyk", category: "Nahar yeməkləri", price: "35 AZN" },
    { image: schnitzel, name: "Toyuq şnitsel", category: "Nahar yeməkləri", price: "18 AZN" },
    { image: spaghetti, name: "Spagetti", category: "Nahar yeməkləri", price: "16 AZN" },
    { image: burger, name: "Burger", category: "Nahar yeməkləri", price: "14 AZN" },
    { image: plov, name: "Plov", category: "Nahar yeməkləri", price: "13 AZN" },

    { image: orangejuice, name: "Portağal şirəsi", category: "İçkilər", price: "5 AZN" },
    { image: lemonade, name: "Limonad", category: "İçkilər", price: "4 AZN" },
    { image: mojito, name: "Mojito", category: "İçkilər", price: "7 AZN" },
    { image: sangria, name: "Sangria", category: "İçkilər", price: "9 AZN" },
    { image: tea, name: "Çay", category: "İçkilər", price: "3 AZN" },
  ];

  const categories = [
    "Hamısı",
    "Səhər yeməkləri",
    "Qəlyanaltılar",
    "Nahar yeməkləri",
    "İçkilər",
  ];

  const filteredItems =
    filter === "Hamısı"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section className="menu">
      <h1 className="menu-title">Restoran Menyusu</h1>

      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={filter === category ? "active-filter" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-container">
        {filteredItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="menu-info">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}