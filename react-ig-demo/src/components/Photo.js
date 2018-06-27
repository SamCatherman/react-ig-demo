import React, { Component } from "react";
import FeedbackSubmit from "./FeedbackSubmit";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.photo.picture} alt="pic" />
        </div>
        <div className="content" />
        <FeedbackSubmit />
      </div>
    );
  }
}

export default Photo;
