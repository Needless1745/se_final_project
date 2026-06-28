import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
              </>
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
