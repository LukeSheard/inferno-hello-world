import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';
import { connect } from 'inferno-mobx';
import Loading from './Loading'

class App extends Component {

    state = { loading: false }

    handleLogin = (e) => {
        e.preventDefault()
        const { router } = this.context
        this.setState({ loading: true })
        router.push('/luke')
    }

    render() {
        const { children } = this.props;

        const { loading } = this.state

        if (loading) {
            return <Loading/>
        }

        return (
        <div>
            <nav>
                <Link to="/" activeClassName="active">
                    Home
                </Link>
                <a onClick={this.handleLogin}>
                    Click to fail
                </a>
            </nav>
            <main>
                {children}
            </main>
        </div>
        )
    }
}

export default connect(App);
