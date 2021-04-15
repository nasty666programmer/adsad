import React from 'react'
import logo from '../img/logo.png'
import {ImageLogo,Nav,LinkSignIn,ContSign,ButtonSignUp, LinksSign} from '../css/HomePage-header';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';


export default function Header() {
    return (
        <Nav>
            <ImageLogo src={logo} alt={'logo'} />
            <ContSign>
              <LinkSignIn>
                <LinksSign>Login</LinksSign>
              </LinkSignIn>
              <ButtonSignUp><Link to="/sign-up">Sign Up</Link></ButtonSignUp>
            </ContSign>
          </Nav>
    )
}
