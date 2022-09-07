import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import BlogDetails from "./Components/BlogDetails";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Loader from "./Components/Loader";

function App() {
  return (
    <div className="main--container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<BlogList />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="*" element={<Loader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
