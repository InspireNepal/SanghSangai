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
              Team reflection for the second sprint
            </h1>
            <span>29th September, 2023</span>
            <p>
              During this sprint, our team accomplished several key tasks.
              First, we conducted an in-depth system study to gain a better
              understanding of the project. Next, we generated dummy data using
              Postman, creating Data Transfer Objects (DTOs), and also collected
              data from a web form to test its functionality. We allocated a
              significant amount of time to enhance our comprehension of the
              system's intricacies. We had a productive meeting with our main
              Community Partner(Micah Nepal) to discuss project details.We also
              followed up with Tearfund to maintain communication and progress
              tracking of the system. We also dedicated effort to prepare a
              presentation for playback-II, as we wanted to improve upon our
              previous performance in this regard. Additionally, we conducted
              trial runs to ensure everything was functioning smoothly. s What's
              equally noteworthy is the remarkable progress we've witnessed
              within our team dynamics. There's a genuine sense of openness and
              camaraderie that has emerged among team members, which has greatly
              contributed to an atmosphere of trust and seamless collaboration.
              It's worth mentioning that, at one point this week, we encountered
              a minor conflict within the team concerning the choice of colors
              in our presentation. However, I'm pleased to say that we
              successfully resolved this issue through constructive dialogue and
              compromise. This experience highlights our team's ability to
              address challenges head-on and work together to find creative
              solutions, strengthening our overall cohesiveness and
              problem-solving capabilities
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

export default Sprint2;
