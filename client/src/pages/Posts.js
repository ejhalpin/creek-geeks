import React, { Component } from "react";
import API from "../utils/API";
import "./posts.css";
import Post from "../components/Post";
class Posts extends Component {
  state = {
    posts: [],
    date: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data.posts})
      )
      .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post=>(
          <Post {...post} />
        ))} 
      </div>
    );
  }
}

export default Posts;
