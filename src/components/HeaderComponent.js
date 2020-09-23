import React from 'react'; 
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

function Header (props) {
    return(
            <React.Fragment>
                <Navbar dark>
                    <div className = "container">
                        <NavbarBrand href="/">ReactJS</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className = "row row-header">
                            <div className = "col-12 col-sm-6">
                                <h1> Indian Feast </h1>
                                <p> We're authenticate Indian restarunt takeway service in Norwich. All the food are delicious and vegan!!!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment> 
    )     
}
export default Header