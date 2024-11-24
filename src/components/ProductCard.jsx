import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onToggleFavorite, onToggleExpand }) => {
  return (
    <div className={`product-card ${product.isFavorited ? "favorited" : ""}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button
        className="favorite-btn"
        onClick={() => onToggleFavorite(product.id)}
      >
        {product.isFavorited ? "❤️ Favorited" : "♡ Favorite"}
      </button>
      <button className="expand-btn" onClick={() => onToggleExpand(product.id)}>
        {product.isExpanded ? "Hide Features" : "Show Features"}
      </button>
      {product.isExpanded && (
        <ul className="features">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCard;
