About = React.createClass({
    render() {
        return (
            <div id="about" className="section">
                <h1>About</h1>
                <div className="content">
                    <div className="services">
                        <a className="fa fa-youtube-square" href={AG_DATA.ABOUT_LINKS.YouTube} target="_blank"></a>
                        <a className="fa fa-facebook-square" href={AG_DATA.ABOUT_LINKS.Facebook} target="_blank"></a>
                        <a className="fa fa-twitter-square" href={AG_DATA.ABOUT_LINKS.Twitter} target="_blank"></a>
                        <a className="fa fa-tumblr-square" href={AG_DATA.ABOUT_LINKS.Tumblr} target="_blank"></a>
                        <a className="fa fa-rss-square" href={AG_DATA.ABOUT_LINKS.RSS} target="_blank"></a>
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
            <span className="team-member">
                <dvi className="wrapper">
                    <img className="picture" src={this.props.data.picture} />
                    <div className="name">{this.props.data.name}</div>
                    <div className="role">{this.props.data.role}</div>
                </dvi>
                <div className="mask"></div>
            </span>
        );
    }
});
