import React from "react";
import "./style.css";

let Post = props => {
  return (
    <div className="post-block" data-id={props.id}>
      <div className="title">
        {props.title}
      </div>
      <div className="content">
        {props.content}
      </div>
      <div className="reactions">
        
      </div>
    </div>
  );
}

export default Post;