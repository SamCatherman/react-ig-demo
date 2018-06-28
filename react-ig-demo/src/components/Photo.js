import React, { Component } from "react";
import FeedbackSubmit from "./FeedbackSubmit";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      comments: []
    };
  }

  handleLikesClick = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.photo.picture} alt="pic" />
        </div>
        <div className="content" />
        <FeedbackSubmit handleLikesClick={this.handleLikesClick} />
        <div>Likes: {this.state.likes}</div>
      </div>
    );
  }
}

export default Photo;
