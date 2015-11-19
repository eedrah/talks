            blueThing: 'ocean',
            unobtainium: ''
        };
    },
    componentWillReceiveProps(nextProps) {
        // Update the row with the new item data
        this.replaceState(this.getInitialState(nextProps));
    },
    render: function() {

    if (this.props.isEmpty) {
        return (<div className="row"><div className="col-1"><b>Nothing to show!</b></div></div>);
    }
    var lastThing = this.props.recent;
    var formated = "";
