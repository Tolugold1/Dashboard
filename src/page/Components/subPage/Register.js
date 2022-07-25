import React from "react";
import LoginHeader from "../Navbar/loginHeader";
import "./Register.styles.scss"
import { Button, Card, CardBody, Form, FormGroup, Label, Input, Col , FormText} from "reactstrap";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { RiBallPenFill } from "react-icons/ri"
import { Link } from "react-router-dom";

const Register = () => {

   const submit = () => {
      alert("Thank you!!!, Your details have been recorded. Feel free to update your account.")
   }

   return(
      <div className="login">
         <div className="login-top">
            <div className="header-login">
               <LoginHeader />
            </div>
            <div className="welcome-text" id="policy">
               <h2 className="text-head">welcome!</h2>
               <h4 className="sub-head" style={{color: "white", fontSize: "24px"}}> Register here!!!</h4>
               <p className="text">Do you have an account opened already on this dashboard? if no, kindly open an account with this awesome form below. Else, navigate to the login page to sign into your account.</p> <RiBallPenFill style={{width: '40px', height: '54px', color: "white"}}/>
            </div>
         </div>
         <div className="login-bottom">
            <div className="login-form">
               <Card className="login-card">
                  <CardBody className="login-card-body">
                     <h4 className="headerText">Sign in with</h4>
                     <div className="button">
                        <Button className="btn-feature" href="https://github.com/Tolugold1"><ImGithub className="github"/> Github</Button>
                        <Button className="btn-feature" href="https://accounts.google.com/AddSession?hl=en&continue=https://www.google.com/&ec=GAlAmgQ"><FcGoogle className="github"/> Google</Button>
                     </div>
                     <hr className="rule"/>
                     <h4 className="headerText">Or log in with your credentials</h4>
                     <Form className="form-form" >
                        <FormGroup className="field">
                           <Label htmlFor="Name" className="txt-label"><MdDriveFileRenameOutline className="label-icon" /> Name</Label>
                           <Input type="Name" id="Name" name="Name" placeholder="Name" className="input-layer-style"/>
                           <Label htmlFor="email" className="txt-label"><MdEmail className="label-icon" /> Email</Label>
                           <Input type="email" id="email" name="email" placeholder="email" className="input-layer-style"/>
                           <Label htmlFor="password" className="txt-label"><MdEmail className="label-icon" /> Password</Label>
                           <Input type="password" id="password" name="password" placeholder="password" className="input-layer-style"/>
                           <FormText color="muted" style={{fontSize: "16px"}}><strong>Password must be strong, it must be Alphanumeric with at least a symbol</strong></FormText>
                        </FormGroup>
                        <FormGroup className="check-checkbox" check>
                           <Label style={{fontSize: "23px"}} check>
                              <Input type="checkbox" id="remember-me" className="remember">{' '}
                              </Input>
                              <em>I agree with <a href="#policy" style={{color: "#564c9ad9"}}>private policy</a></em>
                           </Label>
                        </FormGroup>
                        <FormGroup className="field" check row>
                           <Col sm={{offset: 4}}>
                              <Link to="/"><Button type="submit" className="sign-in" onClick={submit}>Sign up</Button></Link>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
               </Card>
            </div>
         </div>
      </div>
   )
}

export default Register;