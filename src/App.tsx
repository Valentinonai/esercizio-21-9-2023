import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dettaglio/:idNews" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
