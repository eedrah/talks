##Game!
Spot the bug <!-- .element: class="fragment" -->

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

- Found in live code <!-- .element: class="fragment" -->
- Can be fixed by linting <!-- .element: class="fragment" -->

---

##What is linting?

- Back to the game! <!-- .element: class="fragment" -->

---

##Business implications

- 1/5 time in QA <!-- .element: class="fragment" -->
- 1/3 time in Javascript <!-- .element: class="fragment" -->
- 1/4 caught by linting? 1/6? 1/10 <!-- .element: class="fragment" -->
- = half a day of a developer per week <!-- .element: class="fragment" -->

- $$$ (5k - 20k?) <!-- .element: class="fragment" -->

---

##Cost?

Free <!-- .element: class="fragment" -->

---

##Where?
- Sublime <!-- .element: class="fragment" -->
- Atom <!-- .element: class="fragment" -->
- Vim <!-- .element: class="fragment" -->
- Visual studio? <!-- .element: class="fragment" -->

- Toast (Windows notification popup) <!-- .element: class="fragment" -->
- Command line <!-- .element: class="fragment" -->
- Continuous integration <!-- .element: class="fragment" -->

---

##Critiques
- takes too much time <!-- .element: class="fragment" -->
    - takes too much time fixing bugs <!-- .element: class="fragment" -->
    - taking me about 1 minute to go through a 'nice' file <!-- .element: class="fragment" -->
    - 5 minutes for a 1000 line file for the basic errors <!-- .element: class="fragment" -->
    - up to 30 minutes for a file with bugs <!-- .element: class="fragment" -->
        - ... but the alternative? <!-- .element: class="fragment" -->
    - when developing - quicker <!-- .element: class="fragment" -->

- disagreements with the rules <!-- .element: class="fragment" -->
    - customizable <!-- .element: class="fragment" -->
    - convincing over time <!-- .element: class="fragment" -->

----

##Critiques
- clutter <!-- .element: class="fragment" -->
    - sacrifice <!-- .element: class="fragment" -->
    - price we pay for not using webpack / browserify <!-- .element: class="fragment" -->
    - all other clutter is for exceptions to the rules: No exceptions, no clutter <!-- .element: class="fragment" -->

- Takes too much time to implement <!-- .element: class="fragment" -->
    - ... <!-- .element: class="fragment" -->

---

##How to implement?
- github.com/eedrah/LinterForWork <!-- .element: class="fragment" -->
    - <!-- .element: class="fragment" --> `npm install` <!-- .element: class="fragment" -->
    - <!-- .element: class="fragment" --> `npm start` <!-- .element: class="fragment" -->

- Toast (Powershell > v3): <!-- .element: class="fragment" --> `make-toast` <!-- .element: class="fragment" -->

- Atom <!-- .element: class="fragment" -->
    - See me <!-- .element: class="fragment" -->

- Sublime, other <!-- .element: class="fragment" -->
    - Google <!-- .element: class="fragment" -->

---

##Most important thing?
`.eslintrc` <!-- .element: class="fragment" -->
- contains all the rules <!-- .element: class="fragment" -->
- keep synced across all employees <!-- .element: class="fragment" -->

##Next level
- formatter <!-- .element: class="fragment" -->
- continuous integration <!-- .element: class="fragment" -->
    - reject push on fail <!-- .element: class="fragment" -->
