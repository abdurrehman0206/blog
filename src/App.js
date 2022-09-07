import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import Loader from "./Components/Loader";
import BlogDetails from "./Components/BlogDetails";
import Create from "./Components/Create";

function App() {
  return (
    <div className="main--container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Loader />} />
          <Route exact path="/blogs" element={<BlogList />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
