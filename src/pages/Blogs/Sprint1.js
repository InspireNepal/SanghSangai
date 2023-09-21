import React from "react";
import "../../css/Blogs/SinglePage.css";
import blogpic from "../../img/teamSanghSangai.jpg";
import inspire from "../../img/inspire.png";
import Default from "../../layouts/Default";

const Sprint1 = () => {
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
            <h1>Team reflection for the first sprint</h1>
            <span>15th September, 2023</span>
            <p>
              During this month, we all had been working and learning together.
              After the team division, we worked together while making content
              which includes our introduction, team photo and information about
              our community partners for our project web page. Our team got to
              meet one of the community partner Tearfund Nepal’s representatives
              on 14th September, Friday. In this meeting, we had a general
              introduction sharing session. We agreed to have a meeting once a
              week with Micah Nepal and once every two weeks with Tearfund
              Nepal. On 14th September, Friday we had our first playback. The
              main focus was to introduce our project to the Canada team. We
              worked effectively while making the presentation. We understood
              each of our strengths and weaknesses. Each member contributed
              while getting the presentation ready. There were some confusions
              regarding what we should include and what we should not. We
              believe that the playback did not go as we planned. We made some
              mistakes which we will make sure to correct in the next playback.
              Also, we will be working on our communication and presentation
              skills to feel more confident in the upcoming meetings. One thing
              that we realized is that we need more preparation beforehand. Due
              to limited time, we were also not able to conduct a dry run. We
              believe these mistakes should be taken positively and work on it
              so that it will not be repeated next time. Overall, it was a good
              experience and we are enjoying the process. We’re looking forward
              to collaborating within our team and bringing out the best in each
              other.
            </p>
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

export default Sprint1;
