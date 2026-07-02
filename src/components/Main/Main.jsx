import "./Main.css";
import Hero from "../Hero/Hero";

function Main({ handleLoginClick }) {
  return (
    <main className="main">
      <Hero handleLoginClick={handleLoginClick} />
    </main>
  );
}

export default Main;
