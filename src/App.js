import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Login, VideoListing, Liked } from "./pages/index";
import { Navbar, Sidebar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="mock" element={<Mockman />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<VideoListing />} />
        <Route path="liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
