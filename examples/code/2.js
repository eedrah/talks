// 900 line file
var test = React.createClass({
	setDefaultEmail: function() {
		var defaultEmail = "Hi Dog-lover, "
					+ "Thanks for joining TheKennels.com";
		var value = this.state.email;
		value["email"] = defaultEmail;
		this.setState({
			value
		});
	},
    render: function() {
        return (
            <div></div>
        );
    }
});
