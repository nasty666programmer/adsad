
import logo from '../img/logo.png'
import {ImageLogo,PageHeader,LinkSignIn,ContSign,ButtonSignUp, LinksSign, Container} from '../css/HomePage-header';
import {BrowserRouter as Router,Link} from 'react-router-dom';


export default function Header() {

    return (
        <PageHeader>
          <Container>
            <ImageLogo src={logo} alt={'logo'} />
            <ContSign>
              <LinkSignIn>
                <LinksSign>Login</LinksSign>
              </LinkSignIn>
              <ButtonSignUp>
                <Link to="/sign-up">Sign Up</Link>
                </ButtonSignUp>
            </ContSign>
            </Container>
          </PageHeader>
    )
}
