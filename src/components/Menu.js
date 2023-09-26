import React, { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Menu() {
  const [menu, setMenu] = useState({ food: [], drinks: [] });
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    // Fetch JSON data and populate the menu
    fetch("./menu.json")
      .then((response) => response.json())
      .then((data) => {
        // Separate food and drink items
        const foodItems = data.menu.filter((item) => item.type === "food");
        const drinkItems = data.menu.filter((item) => item.type === "drink");

        setMenu({ food: foodItems, drinks: drinkItems });
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []); // Empty dependency array to ensure it runs once on component mount

  // Function to render food items in the table
  function renderFoodMenu() {
    const handleFoodItemClick = (foodItem) => {
      setSelectedFood(foodItem);
    };

    return menu.food.map((foodItem) => (
      <tr key={foodItem.id} onClick={() => handleFoodItemClick(foodItem)}>
        <td className="food-name">{foodItem.name}</td>
        <td>{foodItem.description}</td>
        <td>{foodItem.price}</td>
      </tr>
    ));
  }

  // Function to render drink items in the table
  function renderDrinkMenu() {
    return menu.drinks.map((drinkItem) => (
      <tr key={drinkItem.id} className={selectedFood?.related_wine === drinkItem.id ? "highlighted" : ""}>
        <td>{drinkItem.name}</td>
        <td>{drinkItem.description}</td>
        <td>{drinkItem.price}</td>
      </tr>
    ));
  }

  return (
    <div>
      <div className="topbar"></div>
      <div className="header">
          <img src="img/logo.png" id="logo" className="logo" alt="Logo" width="30%" />
        
      </div>
      <div className="topnav">
      <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
      </div>
      <div id="food-menu" className="onecolumn">
        <h1>Menu</h1>
        <hr />
        <h2>Food</h2>
        <table>
          <tbody id="food-menu-table-body">{renderFoodMenu()}</tbody>
        </table>
      </div>
      <div id="drinks-menu" className="onecolumn">
        <h2>Drinks</h2>
        <table>
          <tbody id="drinks-menu-table-body">{renderDrinkMenu()}</tbody>
        </table>
      </div>
      <div className="footer">
        Pietro's restaurant 2023 - Logo created with <a href="https://www.canva.com">Canva</a> -
        Images by <a href="https://unsplash.com/@jorgezapatag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Zapata</a> and <a href="https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
  );
}

export default Menu;



