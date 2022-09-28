import React from "react";

const Cart = (props) => {
  const { item, index } = props;

  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
  } = item;
  return (
    <div className="p-2 ml-2">
      <p>
        {index + 1 + ". "} {strMeal}
      </p>
    </div>
  );
};

export default Cart;
