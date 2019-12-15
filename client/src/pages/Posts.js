import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from '../components/Navbar';
import { withStyles } from '@material-ui/core/styles';
class Posts extends Component {
  state = {
    posts: [],
    searchParams: '',
    searchResults: [],
    email: '',
    shiboleth: '',
    permission: 0,
    isModalShowing: false
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res => this.setState({ posts: res.data.posts }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    return (
      <div className='container'>
        <Navbar handleInputChange={this.handleInputChange} searchValue={this.state.searchParams} />
      </div>
    );
  }
}

export default Posts;
