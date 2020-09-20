// This is acting as a container componenet 
import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

function Main() {

  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setselectedDish] = useState(null);
  console.log("selectedDish",selectedDish);

  return (
    <div>
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href="/">ReactJS</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {dishes} onClick = {(dishId) => setselectedDish(dishId)}/> 
      <DishDetails dish = {dishes.filter((dish) => dish.id === selectedDish)[0]} ></DishDetails>
    </div>
  );
}

export default Main;