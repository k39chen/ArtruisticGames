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
        return (
            <div id="expo" className="section">
                <Carousel sources={AG_DATA.EXPO_SOURCES} />
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
    componentWillMount() {
        this.resizeIntervals = {};
    },
    render() {
        return(
            <div className="carousel">
                <div className="panels">
                {this.props.sources.map((source, index) => {
                    var isActive = (index === this.state.currentIndex) ? "active" : "";
                    return <img className={["panel", isActive].join(" ")} key={index} src={source.src} data-index={index} />;
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
    componentDidMount() {
        var self = this;
        var $el = $(this.getDOMNode());
        var $container = $el.find(".panels");

        $el.find(".panel").each(function() {
            $(this).on("load", function() {
                var $panel = $(this);
                var key = $(this).data("reactid");
                var index = $(this).data("index");

                self.applyImageFit($container, $panel);
                self.resizeIntervals[key] = setInterval($.proxy(function($container, $panel) {
                    if (parseInt($panel.data("index"), 10) !== index) return;
                    this.applyImageFit($container, $panel);
                }, self, $container, $panel), 100);
            });
        });
    },
    componentWillUnmount() {
        _.each(this.resizeIntervals, function(interval) {
            clearInterval(interval);
        });
    },
    applyImageFit($container, $panel) {
        var fit = computeImageFit(
            IMAGE_FIT.BEST_FILL,
            IMAGE_FIT.ALIGN_CENTER,
            $panel.width(), $panel.height(),
            $container.width(), $container.height()
        );
        $panel.css({
            left: fit.x,
            top: fit.y,
            width: fit.width,
            height: fit.height
        });
    },
    handleControlClick(index, ev) {
        if (this.state.currentIndex === index) return;
        this.setState({currentIndex: index});
    }
});
