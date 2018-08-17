import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // isOpen: props.defaultOpen
        };
    }

    componentWillUpdate () {
        console.log('will update')
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.defaultOpen !== this.componentWillReceiveProps.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    render() {
        let {article, isOpen, onButtonClick} = this.props;
        let body = isOpen && <section className="card-text" style={{marginTop: 10}}>{article.text}</section>;
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={onButtonClick} className="btn btn-primary float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creating date: {new Date(article.date).toLocaleDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
}

export default Article