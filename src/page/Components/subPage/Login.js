import React from "react";
import LoginHeader from "../Navbar/loginHeader";
import "./Login.styles.scss";
import { Button, Card, CardBody, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {

   const submit = () => {
      alert("Login successful")
   }

   return(
      <div className="login">
         <div className="login-top">
            <div className="header-login">
               <LoginHeader />
            </div>
            <div className="welcome-text">
               <h2 className="text-head">welcome!</h2>
               <p className="text">Do you have an account opened already on this dashboard? if yes, kindly navigate to login page to sign in. Else, register with the awesome form below.</p>
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
                           <Label htmlFor="email" className="txt-label"><MdEmail className="label-icon" /> Email</Label>
                           <Input type="email" id="email" name="email" placeholder="email" className="input-layer-style"/>
                           <Label htmlFor="password" className="txt-label"><MdEmail className="label-icon" /> Password</Label>
                           <Input type="password" id="password" name="password" placeholder="password" className="input-layer-style"/>
                           <Label className="check-checkbox" check>
                              <Input type="checkbox" id="remember-me" className="remember">{' '}
                              </Input>
                              Remember me
                           </Label>
                        </FormGroup>
                        <FormGroup className="field" check row>
                           <Col sm={{offset: 4}}>
                           <Link to="/UserProfile"><Button type="submit" className="sign-in" onClick={submit}>Sign in</Button></Link>
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

export default Login;