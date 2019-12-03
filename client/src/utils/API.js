import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  }
};
