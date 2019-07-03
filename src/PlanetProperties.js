import React from "react";
export default class PlanetProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 2
    };
  }

  handleChange = () => {
    this.props.triggerParentUpdate(this.state.val);
  };
  render() {
    return <button onClick={this.handleChange}>Update parent</button>;
  }
}
