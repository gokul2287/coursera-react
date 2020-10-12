import React, {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Label, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom'; 
import { Loading } from './LoadingComponent';

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
    

    const renderComments = (comment, addComment, dishId) => {
        console.log("comm",comment);
        if(comment != null) {   
            console.log("inside render comments ");     

            let options = { year: "numeric", month: "short", day: "numeric" };

            const commentDetails = props.comments.map((comm) => {
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
                        <CommentForm dishId = {dishId} addComment = {addComment}></CommentForm>
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





    if (props.isLoading) {
        return (
            <div className = "container">
                <div className = "row">
                    <Loading></Loading>
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className = "container">
                <div className = "row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.dish != null ) {
        return (
            <div className = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>       
                    <div className="col-xs-12 col-md-5 m-1">
                        { renderDish (props.dish)}
                    </div>
                    <div className="col-xs-12 col-md-5 m-1">
                        { renderComments (props.comments, props.addComment, props.dish.id) }
                    </div>
                </div>
            </div>
        );
    }


    
}
export default DishDetails;

//Comment Form Component 

export function CommentForm (props) {

    let [isModalOpen, setisModalOpen] = useState(false);

    const required  = (val) => val && val.length; 
    const maxLength  = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);

    const toggleCommentFormModal = () => {
        setisModalOpen (
            isModalOpen = !isModalOpen
        )
    }

    const handleSubmit = (values) =>  {
        console.log("Current state is : ", JSON.stringify(values));
        props.addComment(props.dishId, values.rating, values.author, values.comment);
    }
   

    return (
        <div className = "container">
            <div className = "row">
                <Button outline onClick = {() => toggleCommentFormModal()}>
                    <span className = "fa fa-pencil fa-lg">  Submit Comment </span>
                </Button>
            </div>

            <Modal isOpen = {isModalOpen} toggle = {toggleCommentFormModal}>
                <ModalHeader toggle = {toggleCommentFormModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <div className="col-12">
                        <LocalForm onSubmit = {(values) => handleSubmit(values)} >
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" >Your name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" 
                                    validators={{ 
                                        required, 
                                        minLength: minLength(3), 
                                        maxLength: maxLength(15) 
                                    }} />
                                    <Errors className="text-danger" model=".author" show="touched" 
                                    messages = {{ 
                                        required: 'Required', 
                                        minLength: 'Must be greater than 3 characters', 
                                        maxLength: 'Must be 15 charaters or less' 
                                    }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="feedback">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" 
                                    className="form-control" validators = {{ required }} />
                                    <Errors className="text-danger" model=".comment" 
                                    show="touched" 
                                    messages={{ 
                                        required: 'Required' 
                                    }} />
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}