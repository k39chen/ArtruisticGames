Header = React.createClass({
    render() {
        return (
            <div id="header">
                <div className="content">
                    <a className="logo" href="#">Artruistic <em>Games</em></a>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#news">News</a></li>
                        <li className="nav-item"><a href="#games">Games</a></li>
                        <li className="nav-item"><a href="#about">About</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});
