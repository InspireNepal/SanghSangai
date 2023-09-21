import React from "react";
import "../../css/Blogs/SinglePage.css";
import blogpic from "../../img/comingsoon.jpg";
import inspire from "../../img/inspire.png";
import Default from "../../layouts/Default";
import Reflections from "../../reflections.json";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { slug } = useParams();
  const content = Reflections.find((content) => content.titleSlug == slug);
  //   console.log(slug);
  //   console.log(content);
  return (
    <Default>
      <div className="blogpage">
        <div className="blogcontent">
          <div className="blogimg">
            <img src={content.image} />
          </div>
          <div className="authorinfo">
            <img src={inspire} />
            <h5 className="authorname">INSPIRE NEPAL</h5>
          </div>

          <div className="content">
            <h1 className="text-center">{content.title}</h1>
            <span>{content.publishedDate}</span>
            <p>{content.content}</p>
          </div>

          {/* <div className="pagination">
            <a href="">Prev</a>
            <a href="">Next</a>
          </div> */}
        </div>
      </div>
    </Default>
  );
};

export default Layout;
