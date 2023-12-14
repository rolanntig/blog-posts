import React from 'react'
import freddy from "./image/freddy.jpeg";
import freddyurur from "./image/freddyurur.jpeg";
import ururur from "./image/ururur.jpeg";


const SingleComment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.img} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
}

export default SingleComment
