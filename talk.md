##Game!
Spot the bug

---

```
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
```

---

```
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

```

---

```
/* globals useInCode */
var app = {};
var yes, continueText, message;

if (app.props.role != 'BROTHA')
{
    yes = null;
    continueText = 'Nah, he wid me.';
    messgae = 'You are my homeboy. Respekt.';
}

useInCode(yes, continueText, message);

```

---

```
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

```

---

```
if (violentDog) {
    data = PoundStore.get({});
    var roomId = data.rooms.getEmptyRoom();
    this.lockAway('forever', {windowCode:this.props.params.windowCode,
        roomId : roomId });
} else {
    data = AnimalShelterStore.get({ windowCode: this.props.params.windowCode,
        dogId : this.props.dogId});
    debugger;
    // Fill the admin form
    var advertisementProperties = this.state.dogProperties;
    newspaper.buildAdvert(advertisementProperties, this.saleData);
    kennels.makeLovingNest(advertisementProperties, this);

    this.setState({ upForAdoption: true, advertisement: advertisement});
}

```

---

```
var receiveEvent = function (name, value) {
    console.log('Received event!', name, value);
    submitToServer(name, value);
};
```

---

```
var a = {
    b: function () {
        return {
            // ...
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
            return (<div className="row"><div className="col-1">
                <b>Nothing to show!</b></div></div>);
        }
        var lastThing = this.props.recent;
        var formated = "";
    }
}
```

---

##Two things in common

- Found in live code
- Can be fixed by linting

---

##What is linting?

- Back to the game!

---

##Business implications

- 1/5 time in QA
- 1/3 time in Javascript
- 1/4 caught by linting? 1/6? 1/10
- = half a day of a developer per week

- $$$ (5k - 20k?)

---

##Cost?

Free

---

##Where?
- Sublime
- Atom
- Vim
- Visual studio?

- Toast (Windows notification popup)
- Command line
- Continuous integration

---

##Critiques
- takes too much time
    - takes too much time fixing bugs
    - taking me about 1 minute to go through a 'nice' file
    - 5 minutes for a 1000 line file for the basic errors
    - up to 30 minutes for a file with bugs
    - ... but the alternative?
    - when developing - quicker

- disagreements with the rules
    - customizable
    - convincing over time

---

##Critiques
- clutter
    - sacrifice
    - price we pay for not using webpack / browserify
    - all other clutter is for exceptions to the rules: No exceptions, no clutter

- Takes too much time to implement
    - ...

---

##How to implement?
- github.com/eedrah/LinterForWork
    - `npm install`
    - `npm start`

- Toast (Powershell > v3): `make-toast`

- Atom
    - See me

- Sublime, other
    - Google

---

##Next level
- formatter
- continuous integration
    - reject push on fail
