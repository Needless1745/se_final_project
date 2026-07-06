import "./Main.css";
import Hero from "../Hero/Hero";

function Main({ handleLoginClick, onSearch }) {
  return (
    <main className="main">
      <Hero handleLoginClick={handleLoginClick} onSearch={onSearch} />
    </main>
  );
}

export default Main;
