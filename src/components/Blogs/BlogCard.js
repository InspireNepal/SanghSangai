import { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="blog-item">
        <div className="blog-img">
          <img src={props.blog.image} />
        </div>
        <div className="blog-info">
          <span>
            {props.blog.category} | {props.blog.publishedDate}
          </span>
          <h3>{props.blog.title}</h3>
          <p>{props.blog.content.substring(0, 120) + " ..."}</p>
        </div>
        <div className="read-more">
          <Link to={props.blog.link}>
            Read More <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
