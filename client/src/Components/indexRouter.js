import HomePage from '../Pages/PageHome';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import SignUp from '../Pages/SignUp';

function IndexRouter () {
    return (
    <Router>
          <Switch>
            <Route exact path={'/'}>
              <HomePage />  
            </Route> 
            <Route exact path={'/sign-up'}>
                <SignUp />
            </Route> 
          </Switch>    
    </Router>
    )
}

export default IndexRouter;