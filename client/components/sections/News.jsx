News = React.createClass({
    render() {
        return (
            <div id="news" className="section">
                <h1>News</h1>
                <div className="content">
                {AG_DATA.NEWS_ARTICLES.map((article, index) => {
                    return <NewsArticle data={article} key={index} />
                })}
                </div>
            </div>
        )
    }
});
NewsArticle = React.createClass({
    render() {
        return (
            <div className="news-article" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="wrapper">
                    <div className="blur-target">
                        <div className="posted">
                            <img className="author" src={this.props.data.authorPicture} />
                            <div className="date">Posted on {this.props.data.date}</div>
                        </div>
                        <img className="banner" src={this.props.data.banner} />
                        <div className="title">{this.props.data.title}</div>
                        <div className="text">{this.props.data.text}</div>
                        <div className="shadow"></div>
                    </div>
                    <div className="read-more">
                        <span>Read <em>More</em></span>
                        <i className="icon fa fa-arrow-circle-o-right"></i>
                    </div>
                </div>
            </div>
        );
    },
    handleMouseOver(ev) {
        var $el = $(ev.currentTarget);
        $el.addClass("hover");
    },
    handleMouseOut(ev) {
        var $el = $(ev.currentTarget);
        $el.removeClass("hover");
    }
});
