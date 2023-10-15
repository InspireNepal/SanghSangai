import "../../css/Blogs/Blogs.css";
import Default from "../../layouts/Default";
import BlogCard from "../../components/Blogs/BlogCard";
import { Link } from "react-router-dom";
import Reflections from "../../reflections.json";

const Blogs = () => {
  return (
    <Default>
      <div className="container blogs">
        <div className="featured">
          <div className="row">
            <div className="col-md-12 section-title">
              <h2 className="text-center">Featured Reflection</h2>
            </div>
            <div className="col-md-5">
              <img src={Reflections[0].image} />
            </div>
            <div className="col-md-7 featured-info">
              <span>
                {Reflections[0].category} | {Reflections[0].publishedDate}
              </span>
              <Link to={Reflections[0].titleSlug}>
                <h3>{Reflections[0].title}</h3>
              </Link>
              <p>{Reflections[0].content.substring(0, 110) + " ..."}</p>

              <div className="read-more">
                <Link to={Reflections[0].titleSlug}>
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
            {Reflections.map((reflection) => (
              <BlogCard blog={reflection} />
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
};
export default Blogs;
