import React, {Component} from 'react'
import ArticleList from './ArticleList/'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1 className="display-2">React</h1>
                    <button className="btn btn-info" onClick={this.revert}>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App