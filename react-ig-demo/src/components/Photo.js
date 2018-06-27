import React, { Component } from "react";
import FeedbackSubmit from "./FeedbackSubmit";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      msg: "HELOOOO FROM PHOTO"
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.picture} alt="pic" />
        {this.state.msg}
        <FeedbackSubmit />
      </div>
    );
  }
}

export default Photo;
