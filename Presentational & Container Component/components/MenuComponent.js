import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle  } from "reactstrap";

function Menu (props) {  
    
    const renderMenu = props.dishes.map((dish) => {
        return (
            <div className = "col-12 col-md-5 m-1">
                <Card key={dish.id} onClick = {() => props.onClick(dish.id)}>
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
        </div>
    );
}

export default Menu;