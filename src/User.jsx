import Inferno from 'inferno';
import Component from 'inferno-component';

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
