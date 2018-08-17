import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    };

    render() {
        let articlesElement = this.props.articles.map((article, index) =>
            <li key={article.id} style={{margin: '30px'}} className="article-list__li">
                <Article article={article}
                         isOpen={this.state.openArticleId === article.id}
                         onButtonClick={this.handleClick.bind(this, article.id)}
                />
            </li>);
        return (
            <ul>
                {articlesElement}
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}