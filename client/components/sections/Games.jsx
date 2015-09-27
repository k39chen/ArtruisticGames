Games = React.createClass({
    render() {
        return (
            <div id="games" className="section">
                <h1>Games</h1>
                <div className="content">
                    <div className="games">
                    {AG_DATA.GAMES.map((game, index) => {
                        return <Game data={game} key={index} />
                    })}
                    </div>
                    <a className="game-paging game-prev fa fa-chevron-left"></a>
                    <a className="game-paging game-next fa fa-chevron-right"></a>
                </div>
            </div>
        )
    }
});
Game = React.createClass({
    render() {
        return (
            <div className="game" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="wrapper">
                    <img className="picture" src={this.props.data.picture} />
                    <div className="mask">
                        <div className="title">{this.props.data.title}</div>
                        <div className="genres">{this.props.data.genres}</div>
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
