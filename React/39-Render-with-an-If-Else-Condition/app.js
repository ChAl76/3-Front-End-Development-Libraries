// MyComponent contains a boolean in its state which tracks whether you want to display some element
// in the UI or not. The button toggles the state of this value. Currently, it renders the same UI
// every time. Rewrite the render() method with an if/else statement so that if display is true,
// you return the current markup. Otherwise, return the markup without the h1 element.
// Note: You must write an if/else to pass the tests. Use of the ternary operator will not pass here.
// SOLUTION-1:
// Change code above this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
