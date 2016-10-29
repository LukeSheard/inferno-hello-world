import createBrowserHistory from 'history/createBrowserHistory';
import Inferno from 'inferno';
import { Router, Route } from 'inferno-router';
import About from './About';
import App from './App';
import User from './User';

const history = createBrowserHistory();

function renderDOM(location) {
    Inferno.render((
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/" component={ About }/>
            <Route path="/:userId" component={ User }/>
        </Route>
    </Router>
    ), document.getElementById("root"));
}

// Render HTML on the browser
renderDOM(history.location)
history.listen(renderDOM)

if (module.hot) {
    module.hot.accept()
}
