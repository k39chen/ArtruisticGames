/**
 * The expo section of the application.
 *
 * @component Expo
 */
Expo = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        var sources = [
            {src: "game1.jpg"},
            {src: "game2.jpg"},
            {src: "game3.jpg"},
            {src: "game4.jpg"},
            {src: "game5.jpg"}
        ];
        return (
            <div id="expo" className="section">
                <Carousel sources={sources} />
            </div>
        );
    },
});
/**
 * A carousel widget for the expo.
 *
 * @component Carousel
 * @param sources {Array} An array of sources.
 */
Carousel = React.createClass({
    propTypes: {
        sources: React.PropTypes.array,
        currentIndex: React.PropTypes.number
    },
    getDefaultProps() {
        return {
            sources: [],
            currentIndex: 0
        }
    },
    getInitialState() {
        return {
            currentIndex: this.props.currentIndex
        };
    },
    render() {
        return(
            <div className="carousel">
                <div className="panels">
                {this.props.sources.map((source, index) => {
                    var isActive = (index === this.state.currentIndex) ? "active" : "";
                    return <img className={["panel", isActive].join(" ")} key={index} src={source.src}/>;
                })}
                </div>
                <div className="overlay">
                    <div className="controls">
                    {this.props.sources.map((source, index) => {
                        var isActive = (index === this.state.currentIndex) ? "active" : "";
                        return <a className={["control", "fa", "fa-circle", isActive].join(" ")} key={index} onClick={this.handleControlClick.bind(this,index)}></a>;
                    })}
                    </div>
                </div>
            </div>
        );
    },
    handleControlClick(index, ev) {
        if (this.state.currentIndex === index) return;
        this.setState({currentIndex: index});
    }
});
