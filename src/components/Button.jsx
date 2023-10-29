import React, { Component } from "react";

export class Button extends Component {
  state = {
    page: 1
  }

  addPage = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.onClick(this.state.page);
    });
  }

  render() {
    return (
      <button onClick={this.addPage}>Load more</button>
    );
  }
}