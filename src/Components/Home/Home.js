import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleAddToCart = (meal) => {
    setCart([...cart, meal]);
    toast("Wow Item Added");
  };
  console.log(cart);

  return (
    // grid-cols-2
    <div className="w-[95%] mx-auto mt-5 grid grid-cols-4 gap-4">
      {/*  */}
      <div className="col-span-3">
        <h1>Total Meals Found {meals.length}</h1>
        {/* grid-cols-2 */}
        <div className="grid grid-cols-3 gap-3">
          {meals.map((meal) => (
            <Meal
              key={meal.idMeal}
              meal={meal}
              handleAddToCart={handleAddToCart}
            ></Meal>
          ))}
        </div>
      </div>
      <div className="shadow-2xl">
        <div className="sticky top-0">
          <h1 className="mt-4 text-center text-orange-300">Order Summary</h1>
          <p className="mt-4 text-center text-yellow-500">
            Selected Item: {cart.length}
          </p>
          {/* <div className="overflow-x-auto px-3 mt-3">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Area</th>
                </tr>
              </thead>
              {cart.map((item, index) => (
                <tbody>
                  <tr>
                    <th className="text-center">{index + 1}</th>
                    <td>{item.strMeal}</td>
                    <td>{item.strCategory}</td>
                    <td>{item.strArea}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div> */}
          <div className="p-3">
            {cart.map((item) => (
              <Cart item={item}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
