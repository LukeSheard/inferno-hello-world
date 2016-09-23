import Component from 'inferno-component';
import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';
import {
  render,
} from 'inferno-dom';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

render(<HelloWorld />, document.getElementById('app-mount'));