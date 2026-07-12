import pfp from "../../assets/Pfp.jpeg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-container">
          <img src={pfp} alt="" className="about__image" />
        </div>
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hi, My name is Jose, I&apos;m a Software Engineer in training at
            TripleTen. I built NewsExplorer as my final frontend project to
            practice working with React, APIs, and responsive layouts. Building
            this application helped me become more comfortable managing
            application state, fetching external data, and turning a Figma
            design into a polished user experience. I&apos;m excited to continue
            growing as a developer and apply these skills to real-world
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
