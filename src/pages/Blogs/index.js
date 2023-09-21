import "../../css/Blogs/Blogs.css";
import Default from "../../layouts/Default";
import BlogCard from "../../components/Blogs/BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      title: "Team reflection for the first sprint",
      content:
        "During this month, we all had been working and learning together. After the team division, we worked together while making contentwhich includes our introduction, team photo and information aboutour community partners for our project web page. Our team got tomeet one of the community partner Tearfund Nepal’s representativeson 14th September, Friday. In this meeting, we had a generalintroduction sharing session. We agreed to have a meeting once aweek with Micah Nepal and once every two weeks with TearfundNepal. On 14th September, Friday we had our first playback. Themain focus was to introduce our project to the Canada team. Weworked effectively while making the presentation. We understoodeach of our strengths and weaknesses. Each member contributedwhile getting the presentation ready. There were some confusionsregarding what we should include and what we should not. Webelieve that the playback did not go as we planned. We made somemistakes which we will make sure to correct in the next playback.Also, we will be working on our communication and presentationskills to feel more confident in the upcoming meetings. One thingthat we realized is that we need more preparation beforehand. Dueto limited time, we were also not able to conduct a dry run. Webelieve these mistakes should be taken positively and work on itso that it will not be repeated next time. Overall, it was a goodexperience and we are enjoying the process. We’re looking forwardto collaborating within our team and bringing out the best in eachother.",
      image: "images/reflection1.jpg",
      category: "Team Reflection",
      publishedDate: "15th September 2023",
      link: "/blogs/1",
    },
    {
      title: "Team reflection for the second sprint - Coming soon ...",
      content: "",
      image: "images/comingsoon.jpg",
      category: "Team Reflection",
      publishedDate: "29th September 2023",
      link: "/blogs/2",
    },
    // {
    //   title: "Team reflection for the third sprint - Coming soon ...",
    //   content: "",
    //   image: "images/cp3.jpg",
    //   category: "Team Reflection",
    //   publishedDate: "13th October 2023",
    //   link: "/singlepage",
    // },
  ];
  return (
    <Default>
      <div className="container blogs">
        <div className="featured">
          <div className="row">
            <div className="col-md-12 section-title">
              <h2 className="text-center">Featured Reflection</h2>
            </div>
            <div className="col-md-5">
              <img src={blogs[0].image} />
            </div>
            <div className="col-md-7 featured-info">
              <span>
                {blogs[0].category} | {blogs[0].publishedDate}
              </span>
              <h3>{blogs[0].title}</h3>
              <p>{blogs[0].content.substring(0, 120) + " ..."}</p>
              <div className="read-more">
                <Link to="/singlepage">
                  Read More <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-list">
          <div className="row justify-content-center">
            <div className="col-md-12 section-title">
              <h2 className="text-center">Our Reflections</h2>
            </div>
            <BlogCard blog={blogs[0]} />

            <BlogCard blog={blogs[1]} />

            {/* <BlogCard blog={blogs[2]} /> */}
          </div>
        </div>
      </div>
    </Default>
  );
};
export default Blogs;
