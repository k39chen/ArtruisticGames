News = React.createClass({
    render() {
        return (
            <div id="news" className="section">
                <h1>News</h1>
                <div className="content">
                    <div className="news-articles">
                    {AG_DATA.NEWS_ARTICLES.map((article, index) => {
                        return <NewsArticle data={article} key={index} />
                    })}
                    </div>
                    <a className="article-paging article-prev fa fa-chevron-left"></a>
                    <a className="article-paging article-next fa fa-chevron-right"></a>
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
                        <img className="banner" src={this.props.data.banner} />
                        <div className="text-wrapper">
                            <div className="title">{this.props.data.title}</div>
                            <div className="text">{this.props.data.text}</div>
                            <div className="shadow"></div>
                        </div>
                        <div className="posted">
                            <div className="author">
                                <img className="author-picture" src={this.props.data.authorPicture} />
                                <div className="author-caption">Posted by <em>{this.props.data.authorName}</em></div>
                            </div>
                            <div className="date">{this.props.data.date}</div>
                        </div>
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
