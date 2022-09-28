import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header/Header";
import Swal from "sweetalert2";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("a");
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);

  const handleAddToCart = (meal) => {
    if (cart.length < 5) {
      setCart([...cart, meal]);
      Swal.fire("Item Selected!", "See The Order Summary!", "success");
    } else {
      Swal.fire("Opppsss!!", "Cannot added more than 5 items", "error");
    }
  };

  return (
    <div>
      <Header setSearch={setSearch}></Header>

      <div className="w-[95%] mx-auto mt-5 grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <h1 className="text-center mb-5 text-2xl font-bold text">
            Total Meals Found{" "}
            <span className="text-4xl text-success">{meals.length}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
              {cart.map((item, index) => (
                <Cart key={item.idMeal} item={item} index={index}></Cart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
