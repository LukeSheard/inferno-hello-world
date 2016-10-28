import Component from 'inferno/dist/inferno-component';
import Inferno from 'inferno/dist/inferno';

export default class App extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        USER
      </div>
    )
  }
}