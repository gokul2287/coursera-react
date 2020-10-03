// This is acting as a container componenet 
import React, { useState, useEffect } from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';

function Main() {

  //Defining state 
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);
  //const [selectedDish, setselectedDish] = useState(null);
  // console.log("selectedDish",selectedDish);

  //Run useEffect on State change - lifecycle  
  // useEffect(() => {
  //   console.log("State change")  ;
  // },[selectedDish]);

  const HomePage = () => {
    return (
      <Home dish = {dishes.filter((dish) => dish.featured)[0]}
      promotion = {promotions.filter((promo) => promo.featured)[0]}
      leader = {leaders.filter((lead)=> lead.featured)[0]}></Home>
    );
  } 

  const DishWithID = ({match}) => {
    return (
      <DishDetails dish = {dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      comments = {comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}>
      </DishDetails>
    );
  }

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path ="/home" component = {HomePage}></Route>
        <Route exact path = "/menu" component = {()=> < Menu dishes = {dishes} />}></Route>
        <Route path = "/menu/:dishId" component = { DishWithID }></Route>
        <Route exact path = "/contactus" component = { Contact }></Route>
        <Route exact path = "/aboutus" component = {() => < About leaders = {leaders} />}></Route>
        <Redirect to = "/home"></Redirect>
      </Switch>
      {/* <Menu dishes = {dishes} onClick = {(dishId) => setselectedDish(dishId)}/>  */}
      {/* <DishDetails dish = {dishes.filter((dish) => dish.id === selectedDish)[0]} ></DishDetails> */}
      <Footer></Footer>
    </div>
  );
}

export default Main;