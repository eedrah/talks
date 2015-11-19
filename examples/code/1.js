var carShut = React.createClass({
    propTypes: {
        currentCar: React.PropTypes.object.isRequired,
       allCars: React.PropTypes.object.isRequired
    },
    render: function() {
        var items = (this.props.currentCar.Passengers.length)
            ? this.props.currentCar.Passengers.length
            : 0;
        return (
            <div className="car car-shut">
            <button className="Large White carLogo"
                onClick={this.props.openCar}>View Car </button>
            </div>
        );
    }
});
