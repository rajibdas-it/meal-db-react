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
    <div>
      <tbody>
        <tr>
          <td>{strMeal}</td>-<td>{strCategory}</td>-<td>{strArea}</td>
        </tr>
      </tbody>
    </div>
  );
};

export default Cart;
