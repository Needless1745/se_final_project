import pfp from "../../assets/Cyberpunkpfp.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__img-cntnr">
          <img src={pfp} alt="" className="about__img" />
        </div>
        <div className="about__text-cntnr">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            My name is Jose and this is the frontend of my final project for
            Tripleten. This project helps with obtaining news articles via an
            API that users are then able to save in their own profiles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
