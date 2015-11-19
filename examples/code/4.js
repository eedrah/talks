/* globals
    React
    LivesStore
*/
var Cat = React.createClass({
    componentDidMount: function() {
        LivesStore.register(this);
    },
    componentDidUnmount: function() {
        LivesStore.unregister(this);
    },
    render: function() {
        return (
            <div>I'm a cat!</div>
        );
    }
});
