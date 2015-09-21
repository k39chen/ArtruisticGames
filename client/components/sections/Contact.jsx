Contact = React.createClass({
    render() {
        return (
            <div id="contact" className="section">
                <h1>Contact</h1>
                <div className="content">
                    <div className="text">{AG_DATA.CONTACT_MESSAGE}</div>
                    <div className="submit-form">
                        <div className="first-row">
                            <div className="email-group">
                                <div className="wrapper">
                                    <span>Email</span>
                                    <input type="email" name="email" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="subject-group">
                                <div className="wrapper">
                                    <span>Subject</span>
                                    <input type="text" name="subject" placeholder="Enter subject" />
                                </div>
                            </div>
                        </div>
                        <div className="message-group">
                            <div className="wrapper">
                                <div>Message</div>
                                <textarea name="message" placeholder="Enter message"></textarea>
                            </div>
                        </div>
                        <div className="wrapper">
                            <button className="submit-message-button"><i className="fa fa-send"></i> Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
