import React, {useState} from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetails from './DishdetailComponent';


function Menu (props) {  

    const [selectedDish, setselectedDish] = useState(null);
    console.log("selectedDish",selectedDish);
    
    const renderMenu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className = "col-12 col-md-5 m-1">
                <Card onClick = {() => setselectedDish(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {renderMenu}
            </div>
        <div className="row">
            {/* calling Dish details component and passing selected dish  */}
            { DishDetails (selectedDish) }
            {/* <DishDetails selectedDish></DishDetails> */}
        </div>
    </div>
    );
}

export default Menu;