Game!
- Spot the bug

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

Two things in common

- Found in live code
- Can be fixed by linting

---

What is linting?

- Examples - repeat the above

---

Business implications

- 1/5 time in QA
- 1/3 time in Javascript
- 1/4 caught by linting? 1/6? 1/10
- = half a day of a developer per week

- $$$ (5k - 20k?)

---

- Sublime
- Atom
- Vim
- Visual studio?

- Toast (Windows notification popup)
- Command line
- Continuous integration

---

Critiques
- takes too much time
- - takes too much time fixing bugs
- - taking me about 1 minute to go through a 'nice' file
- - 5 minutes for a 1000 line file for the basic errors
    - up to 30 minutes for a file with bugs
- - ... but the alternative?
- - when developing - quicker

- disagreements with the rules
- - customizable
- - convincing over time

- clutter
    - sacrifice
- - price we pay for not using webpack / browserify
- - all other clutter is for exceptions to the rules: No exceptions, no clutter

- Takes too much time to implement
- - ...

---

How to implement
- github.com/eedrah/LinterForWork
- `npm install`
- `npm start`

- Toast (Powershell > v3): `make-toast`

- Atom
- - See me

- Sublime, other
- - Google

---

Next level
- formatter
- continuous integration
- - reject push on fail
