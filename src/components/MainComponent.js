// This is acting as a container componenet 
import React from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

// const mapStateToProps = state => {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders
//   }
// }

function Main() {
  
  const dd = useSelector(state =>state) 
  const disptch = useDispatch(dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  }));
  //Defining state 
  // const [dishes, setDishes] = useState(DISHES);
  // const [comments, setComments] = useState(COMMENTS);
  // const [promotions] = useState(PROMOTIONS);
  // const [leaders] = useState(LEADERS);
  //const [selectedDish, setselectedDish] = useState(null);
  // console.log("selectedDish",selectedDish);

  //Run useEffect on State change - lifecycle  
  // useEffect(() => {
  //   console.log("State change")  ;
  // },[selectedDish]);

  const HomePage = () => {
    return (
      <Home dish = {dd.dishes.filter((dish) => dish.featured)[0]}
      promotion = {dd.promotions.filter((promo) => promo.featured)[0]}
      leader = {dd.leaders.filter((lead)=> lead.featured)[0]}></Home>
    );
  } 

  const DishWithID = ({match}) => {
    return (
      <DishDetails dish = {dd.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      comments = {dd.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      addComment = {disptch.addComment} >
      </DishDetails>
    );
  }

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path ="/home" component = {HomePage}></Route>
        <Route exact path = "/menu" component = {()=> < Menu dishes = {dd.dishes} />}></Route>
        <Route path = "/menu/:dishId" component = { DishWithID }></Route>
        <Route exact path = "/contactus" component = { Contact }></Route>
        <Route exact path = "/aboutus" component = {() => < About leaders = {dd.leaders} />}></Route>
        <Redirect to = "/home"></Redirect>
      </Switch>
      {/* <Menu dishes = {dishes} onClick = {(dishId) => setselectedDish(dishId)}/>  */}
      {/* <DishDetails dish = {dishes.filter((dish) => dish.id === selectedDish)[0]} ></DishDetails> */}
      <Footer></Footer>
    </div>
  );
}

export default Main;