Header = React.createClass({
    render() {
        return (
            <div id="header">
                <a className="logo" href="#">Artruistic <em>Games</em></a>
                <ul className="nav-list">
                    <li className="nav-item"><a onClick={this.handleNavClick} href="#news">News</a></li>
                    <li className="nav-item"><a onClick={this.handleNavClick} href="#games">Games</a></li>
                    <li className="nav-item"><a onClick={this.handleNavClick} href="#about">About</a></li>
                    <li className="nav-item"><a onClick={this.handleNavClick} href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    },
    handleNavClick: function(ev) {
        var $el = $(ev.target);
        var $section = $(".section"+$el.attr("href"));
        var offsetTop = $section.offset().top;

        ev.preventDefault();

        $("body,html").animate({scrollTop:offsetTop}, {duration: 500, easing: "swing"});
    }
});
