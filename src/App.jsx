import Component from 'inferno/dist/inferno-component';
import Inferno from 'inferno/dist/inferno';
import {
  Link
} from 'inferno/dist/inferno-router';
export default class App extends Component {
  render() {
    const {
      children, 
    } = this.props;

    return (
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
    )
  }
}