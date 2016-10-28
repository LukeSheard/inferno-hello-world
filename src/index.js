import createBrowserHistory from 'history/createBrowserHistory';
import Component from 'inferno/dist/inferno-component';
import Inferno from 'inferno/dist/inferno';
import {
  Router, 
  Route
} from 'inferno/dist/inferno-router';

import About from './About';
import App from './App';
import User from './User';

const history = createBrowserHistory();

Inferno.render((
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/" component={ About } />
            <Route path="/:userId" component={ User } /> 
        </Route>
    </Router>
), document.getElementById("root"));