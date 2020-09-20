import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle  } from "reactstrap";

function DishDetails (props) {
    console.log("props in dish details ", props);
   
    const renderDish = (dish) => {
        console.log("dish",dish);
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else {
            return(
                <div></div>
            );
        }
    };
    

    const renderComments = (comment) => {
        console.log("comm",comment);
        if(comment != null) {   
            console.log("inside render comments ");     

            let options = { year: "numeric", month: "short", day: "numeric" };

            const commentDetails = props.dish.comments.map((comm) => {
                return (
                    <li key={comm.id} >
                        <p>{comm.comment}</p>
                        <p>-- {comm.author}, {new Date(comm.date).toLocaleDateString("en-US", options)}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {commentDetails}
                    </ul>
                </div>
            );
        }      
        else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className = "container">
            <div className = "row">
                <div className="col-xs-12 col-md-5 m-1">
                    { renderDish (props.dish)}
                </div>
                <div className="col-xs-12 col-md-5 m-1">
                    { renderComments (props.dish) }
                </div>
            </div>
        </div>
    );
}
export default DishDetails;