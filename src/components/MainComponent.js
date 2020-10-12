// This is acting as a container componenet 
import React, {useEffect} from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, fetchDishes, fetchPromos, fetchComments } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

// const mapStateToProps = state => {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders
//   }
// }

function Main(props) {
  
  const dd = useSelector(state =>state) 
  useDispatch(dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromotions: () => {dispatch(fetchPromos())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
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

  useEffect(() => {
    fetchDishes();
    fetchComments();
    fetchPromos();
  })

 

  const HomePage = () => {
    return (
      <Home dish = {dd.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading = {dd.dishes.isLoading}
      dishesErrMess = {dd.dishes.errMess}
      promotion = {dd.promotions.promotions.filter((promo) => promo.featured)[0]}
      promosLoading  = {dd.promotions.isLoading}
      promosErrMess = {dd.promotions.errMess}
      leader = {dd.leaders.filter((lead)=> lead.featured)[0]}></Home>
    );
  } 

  const DishWithID = ({match}) => {
    return (
      <DishDetails dish = {dd.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      isLoading = {dd.dishes.isLoading}
      errMess = {dd.dishes.errMess}
      comments = {dd.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      addComment = {addComment} 
      commentsErrMess = {dd.comments.errMess}>
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
        <Route exact path = "/contactus" component = { () => <Contact resetFeedbackForm = {dd.resetFeedbackForm} /> }></Route>
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