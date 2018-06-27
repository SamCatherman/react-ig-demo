import React, { Component } from "react";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      msg: "HELOOOO FROM PHOTO"
    };
  }

  render() {
    return <div>{this.state.msg}</div>;
  }
}

export default Photo;
