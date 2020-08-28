import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node=document.getElementById("root");

class Post extends Component{
  render(){
    return React.createElement(
      "div",
      {
        className:"post"
      },
      React.createElement(
        "h1",
        {
          className:"postAuthor",
          id:this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className:"postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    )
  }
}

class Comment extends Component{
  render(){
    return React.createElement(
      "div",
      {
        className:"commentAuthor"
      },
      this.props.user,
      React.createElement(
        "span",
        {
          className:"commentContent"
        },
        this.props.content
      )
    )
  }
}
Comment.PropTypes={
  id:PropTypes.number.isRequired,
  content:PropTypes.string.isRequired,
  user:PropTypes.string.isRequired
}
Post.PropTypes={
  user:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
};

const App=React.createElement(Post,{
  id:1,
  content:"  said: This a post!",
  user:"mark"
},
React.createElement(Comment,{
  id:2,
  user:"bob",
  content:" commented: wow! how cool!"
})
);

render (App, node);