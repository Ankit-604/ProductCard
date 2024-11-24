import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import MonkeyDLuffy from "./assets/MonkeyDLuffy.png";
import Batman from "./assets/Batman.png";
import HarryPotter from "./assets/HarryPotter.png";
import BuzzLightyear from "./assets/Buzz_Lightyear.png";
import NarutoUzumaki from "./assets/NarutoUzumaki.png";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Monkey D. Luffy",
      price: "$10",
      description:
        "The One Piece manga features an extensive cast of characters created by Eiichiro Oda.",
      image: MonkeyDLuffy,
      features: ["Hard", "Flexible", "Strong"],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 2,
      name: "Batman",
      price: "$15",
      description:
        "One of the most iconic fictional characters in the world, Batman.",
      image: Batman,
      features: ["Hard", "Flexible", "Strong"],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 3,
      name: "Harry Potter",
      price: "$20",
      description:
        "Harry Potter is a series of novels by British author J. K. Rowling.",
      image: HarryPotter,
      features: ["Hard", "Flexible", "Strong"],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 4,
      name: "Buzz Lightyear,",
      price: "$30",
      description:
        "Buzz Lightyear is a fictional character in the Disney–Pixar Toy Story franchise.",
      image: BuzzLightyear,
      features: ["Hard", "Flexible", "Strong"],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 5,
      name: "Naruto Uzumaki,",
      price: "$25",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.",
      image: NarutoUzumaki,
      features: ["Hard", "Flexible", "Strong"],
      isFavorited: false,
      isExpanded: false,
    },
  ]);

  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  const toggleExpand = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isExpanded: !product.isExpanded }
          : product
      )
    );
  };

  const clearFavorites = () => {
    setProducts((prev) =>
      prev.map((product) => ({ ...product, isFavorited: false }))
    );
  };

  const filteredProducts = showFavorites
    ? products.filter((product) => product.isFavorited)
    : products;

  return (
    <div className="app">
      <h1>Action Figures</h1>
      <div className="controls">
        <button onClick={clearFavorites}>Clear Favorites</button>
        <button onClick={() => setShowFavorites((prev) => !prev)}>
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleFavorite={toggleFavorite}
            onToggleExpand={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
