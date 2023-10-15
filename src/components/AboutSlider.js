import "../css/AboutSlider.css";
import Quote from "../img/quote.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="row about-slider">
        <h2 className="heading">Team Introduction</h2>
        <Slider {...settings}>
          <div className="about-slider-item">
            <p>
              Aeliya is a recent graduate of B.Sc.CSIT(Bachelor of Computer
              Science & Information Technology) program offered by Tribhuvan
              University. He got his first laptop only after joining bachelors
              program and since then he developed interest in designing and
              programming. Having gained some experiences as a "Frontend &
              WordPress developer" in a local IT company, he realized that being
              good at Frontend & WordPress platform only is not enough for a
              tech student to excel as a Developer and a Problem Solver. So he
              decided to consider new opportunities and that's when he heard
              about this Inspire program & decided to be a part of it. He is now
              a part of the team "SangaSangai" and is enjoying the journey so
              far. He is ready to contribute to his team in the best way he can.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Aeliya Tamang</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Anushka Suyal is currently in her final year, pursuing a
              Bachelor’s degree in Computer Science and Information Technology
              at Ambition College, affiliated with Tribhuvan University. In her
              free time, she loves spending time in natural places . She often
              goes hiking in the mountains, explores riversides. she has a knack
              for music and plays the keyboard as one of her hobbies. She also
              has a cooking passion and loves to experiment with cooking, trying
              out new dishes and recipes.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Anushka Suyal</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Riya is a final year student of Bachelor in Information Technology
              (Computing) at Islington College, London Metropolitan University.
              She has a strong aspiration in the field of data engineering.
              Besides studies, she loves doing arts like paintings and sketching
              especially mandala art to showcase her creativity. With her
              dedication and skills, she aims to make a meaningful impact in the
              world of data.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Riya Shrestha</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Subash is a final-year student studying for a Bachelor in
              Information Technology at KIST, which is affiliated with
              Purbanchal University. He has a deep passion for writing lines of
              code and thoroughly enjoys the process. Apart from his love for
              coding, he takes pleasure in riding motorcycles and exploring new
              places. His true passion lies in software engineering, where he
              thrives on the challenge of solving complex problems.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Subash Danuwar</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default AboutSlider;
