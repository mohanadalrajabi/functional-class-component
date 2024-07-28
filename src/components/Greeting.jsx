import { Component } from "react";

export default class Greeting extends Component {
  render() {
    return (
      <p>
        {this.props.message}, ~{this.props.name} 👋
      </p>
    );
  }
}
