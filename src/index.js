import createBrowserHistory from 'history/createBrowserHistory';
import Inferno from 'inferno/dist/inferno';
import {
  Router, 
  Route, 
  Link
} from 'inferno/dist/inferno-router';

const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/" activeClassName="active">
        About
      </Link>
      <Link to="/luke" activeClassName="active">
        Luke
      </Link>
      <Link to="/john" activeClassName="active">
        John
      </Link>
    </nav>
    <main>
      {children}
    </main>
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const User = (...args) => {
  console.log(args);
  return (
    <div>
      About
    </div>
  );
}

const history = createBrowserHistory();

Inferno.render((
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/" component={ About } />
            <Route path="/:userId" component={ User } /> 
        </Route>
    </Router>
), document.getElementById("root"));