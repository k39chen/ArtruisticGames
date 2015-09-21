About = React.createClass({
    render() {
        return (
            <div id="about" className="section">
                <h1>About</h1>
                <div className="content">
                    <div className="services">
                        <a className="fa fa-youtube-square" href="#"></a>
                        <a className="fa fa-facebook-square" href="#"></a>
                        <a className="fa fa-twitter-square" href="#"></a>
                        <a className="fa fa-tumblr-square" href="#"></a>
                        <a className="fa fa-rss-square" href="#"></a>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={this.getText()} />
                    <div className="team-members">
                    {AG_DATA.TEAM_MEMBERS.map((member, index) => {
                        return <TeamMember data={member} key={index} />
                    })}
                    </div>
                </div>
            </div>
        )
    },
    getText() {
        return {__html: AG_DATA.ABOUT_MESSAGE};
    }
});
TeamMember = React.createClass({
    render() {
        return (
            <div className="team-member">
                <div className="wrapper">
                    <img className="picture" src={this.props.data.picture} />
                    <div className="name">{this.props.data.name}</div>
                    <div className="role">{this.props.data.role}</div>
                </div>
                <div className="mask"></div>
            </div>
        );
    }
});
