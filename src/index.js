import React from "react";
import ReactDOM from "react-dom";
import PlanetProperties from "./PlanetProperties";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      counter: 0
    };
  }
  updateThisCounter = val => {
    this.setState({ counter: this.state.counter + val });
  };

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <PlanetProperties triggerParentUpdate={this.updateThisCounter} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
