import Inferno from 'inferno';
import {
  render,
} from 'inferno-dom';

import HelloWorld from './HelloWorld.jsx';

render(<HelloWorld />, document.getElementById('app-mount'));