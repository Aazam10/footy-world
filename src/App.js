import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  VideoListing,
  Liked,
  Signup,
  WatchLater,
  History,
  Playlist,
} from "./pages/index";
import { Navbar, Sidebar } from "./components";
import { useLocation } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { SingleVideo } from "./pages/SingleVideo/SingleVideo.jsx";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <Navbar />
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/singlevideo" && <Sidebar />}
      <Routes>
        <Route path="mock" element={<Mockman />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<VideoListing />} />
        <Route path="/singlevideo" element={<SingleVideo />} />
        <Route
          path="liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
        <Route
          path="watchLater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
