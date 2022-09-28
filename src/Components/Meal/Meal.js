import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
  const { meal, handleAddToCart } = props;
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
  } = meal;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strMeal}
          <div className="badge badge-secondary">new</div>
        </h2>
        <p>
          {strInstructions.length >= 50
            ? strInstructions.slice(0, 50) + "..."
            : strInstructions}
        </p>
        <div className="flex gap-2 mt-3">
          <div className="badge badge-outline">{strCategory}</div>
          <div className="badge badge-outline">{strArea}</div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-2 mb-8">
        <button className="btn btn-sm btn-accent">Details</button>
        <button
          onClick={() => handleAddToCart(meal)}
          className="btn btn-sm btn-success"
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Meal;
