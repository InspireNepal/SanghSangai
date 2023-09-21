import React from "react";
import "../../css/Blogs/SinglePage.css";
import blogpic from "../../img/comingsoon.jpg";
import inspire from "../../img/inspire.png";
import Default from "../../layouts/Default";

const Sprint2 = () => {
  return (
    <Default>
      <div className="blogpage">
        <div className="blogcontent">
          <div className="blogimg">
            <img src={blogpic} />
          </div>
          <div className="authorinfo">
            <img src={inspire} />
            <h5 className="authorname">INSPIRE NEPAL</h5>
          </div>

          <div className="content">
            <h1 className="text-center">
              Team reflection for the second sprint - Coming soon ...
            </h1>
            <span>29th September, 2023</span>
            <p>Coming soon ...</p>
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

export default Sprint2;
