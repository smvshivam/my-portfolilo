import { useState } from "react";
import img from "../assets/img/mypicture.jpg";

const AboutMore = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handlestate = () => {
    if (isClicked == false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  return (
    <div className="w-75 my-5 container text-center">
      <h1 className="my-4 about">
        About <span className="me">Me</span>
      </h1>
      <div className="d-flex flex-column align-items-center">
        <img src={img} className="about-img rounded-circle" />
        <div className="my-3 about about1">
          <span className="me">Full-Stack </span>
          <span className="dev">Developer!</span>
        </div>
      </div>
      <p className="my-3 font-p">
        I am a passionate{" "}
        <span className="font-p me">Full Stack Developer </span>dedicated to
        crafting seamless and high-performance web applications. with a strong
        foundation in both <span className="font-p me">frontend </span>and{" "}
        <span className="font-p dev">backend</span> technologies, I specialize
        in building intuitive, scalable, and efficient digital experiences. My
        approach combines clean code, modern frameworks, and a problem-solving
        mindset to deliver innovative solutions.
      </p>

      {isClicked ? (
        <>
          <section className="my-5 container">
            <h3 className="my-2 academic"><span className="me">My academic</span><span className="dev"> journey</span></h3>
            <div className="my-4 text-start">
                <h5 className="collge me ">Master Of Computer Application</h5>
                <p className="font-p">NRI Institute Of Science & Technology, Bhopal(M.P.)  |  2023 - 2025</p>
            </div>
            <div className="my-4 text-start">
                <h5 className="collge me">Bachelor Of Computer Application</h5>
                <p className="font-p">Chandradhari Mithila College, Darbhanga(Bihar)  |  2019 - 2022</p>
            </div>
            <div className="my-4 text-start">
                <h5 className="collge me ">Senior Secondary (Science Stream)</h5>
                <p className="font-p">Dr. Nagedra Jha College, Hanumannagar,Darbhanga(Bihar)  |  2017 - 2019</p>
            </div>
          </section>
          <button
            className="btn btn-lg btn-color-1 main-btn-font"
            onClick={() => handlestate()}
          >
            close
          </button>
        </>
      ) : (
        <button
          className="btn btn-lg btn-color-1 main-btn-font"
          onClick={() => handlestate()}
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default AboutMore;
