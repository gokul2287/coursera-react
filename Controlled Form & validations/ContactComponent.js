import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Col, Label, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact (props) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [telnum, setTelnum] = useState('');
    const [agree, setAgree] = useState(false);
    const [contactType, setContactType] = useState('');
    const [message, setMessgae] = useState('');
    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        telnum: false,
        email:false
    })

    const handleCheckBoxToggle = (event) => {
        setAgree (
            event.target.type === 'checkbox' ? event.target.checked : event.target.value
        )
        
    }

    const handleSubmit = (event) =>  {
        console.log("Current state is : ", JSON.stringify(setFirstname));
        alert("Current state is : ", JSON.stringify(setFirstname));
        event.preventDefault();
    }

    const handleBlur = (field) => (e) => {
        setTouched ({           
            touched: {...touched, [field]: true }
        });
    }

    function validate (firstname, lastname, telnum, email) {
        const errors =  {
            firstname: '',
            lastname: '',
            telnum: '',
            email:''
        };
     
        if(touched.firstname && firstname.length < 3 ) 
            errors.firstname = 'First name should be greater than to 3 char';
        else if (touched.firstname && firstname.length > 10 )
            errors.firstname = 'First name should be less than to 10 char';

        if(touched.lastname && lastname.length < 3 ) 
            errors.firstname = 'Last name should be greater than to 3 char';
        else if (touched.lastname && lastname.length > 10 )
            errors.firstname = 'Last name should be less than to 10 char';
        
        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telnum))
            errors.telnum = 'Please enter the numbers only ';

        if(touched.email && email.split('').filter(x=> x === '@').length !== 1)    
            errors.email = "email should contain @ sign";

        return errors;    
    }

    const errors = validate(firstname, lastname, telnum, email);
    
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        111, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        USA<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className = "row row-content">
                <div className = "col-12">
                    <h3> Send us your feedback</h3>
                </div>
                <div className = "col-12 col-md-9">
                    <Form onSubmit = {handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor = "firstname" md = {2}>First Name</Label>
                            <Col md = {10}>
                                <Input type = "text" id ="firstname" name = "firstname" placeholder = "First Name" 
                                value = {firstname} valid = {errors.firstname === ''} invalid = {errors.firstname !== ''}
                                onChange = {(e) => setFirstname(e.target.value)} 
                                onBlur = {handleBlur('firstname')}></Input>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor = "lastname" md = {2}>Last Name</Label>
                            <Col md = {10}>
                                <Input type = "text" id ="lastname" name = "lastname" 
                                placeholder = "Last Name" 
                                value = {lastname}  valid = {errors.lastname === ''} invalid = {errors.lastname !== ''}
                                onChange = {(e) => setLastname(e.target.value)} onBlur={handleBlur('lastname')}></Input>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor = "telnum" md = {2}>Contact Number</Label>
                            <Col md = {10}>
                                <Input type = "tel" id ="telnum" name = "telnum" placeholder = "Tel. number" 
                                value = {telnum} valid = {errors.telnum === ''} invalid = {errors.telnum !== ''}
                                onChange = {(e) => setTelnum(e.target.value)} 
                                onBlur={handleBlur('telnum')}></Input>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor = "email" md = {2}>Email</Label>
                            <Col md = {10}>
                                <Input type = "email" id ="email" name = "email" 
                                placeholder = "Email" value = {email} 
                                valid = {errors.email === ''} invalid = {errors.email !== ''}
                                onChange = {(e) => setEmail(e.target.value)} 
                                onBlur={handleBlur('email')}></Input>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md = {{size:6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type = "checkbox" name = "agree" checked = {agree} onChange = {handleCheckBoxToggle}></Input> 
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md = {{size:3, offset: 1}}>
                                <Input type = "select" name = "contactType" value = {contactType} onChange = {(e) => setContactType(e.target.value)}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor = "message" md = {2}>Your feedback</Label>
                            <Col md = {10}>
                                <Input type = "textarea" id ="message" name = "messgae" rows = "12" value = {message} onChange = {(e) => setMessgae(e.target.value)}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md = {{size:10, offset:2}}>
                                <Button type = "submit" color = "primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;