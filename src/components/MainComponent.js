// This is acting as a container componenet 
import React, { useState, useEffect } from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {

  const [dishes, setDishes] = useState(DISHES);
  //const [selectedDish, setselectedDish] = useState(null);
 // console.log("selectedDish",selectedDish);

  //Run useEffect on State change - lifecycle  
  // useEffect(() => {
  //   console.log("State change")  ;
  // },[selectedDish]);

  const HomePage = () => {
    return (
      <Home></Home>
    );
  } 

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path ="/home" component = {HomePage}></Route>
        <Route exact path = "/menu" component = {()=> <Menu dishes = {dishes} />}></Route>
        <Redirect to = "/home"></Redirect>
      </Switch>
      {/* <Menu dishes = {dishes} onClick = {(dishId) => setselectedDish(dishId)}/>  */}
      {/* <DishDetails dish = {dishes.filter((dish) => dish.id === selectedDish)[0]} ></DishDetails> */}
      <Footer></Footer>
    </div>
  );
}

export default Main;