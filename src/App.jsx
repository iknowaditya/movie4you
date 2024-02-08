import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Constant/landing";
import NowPlaying from "./pages/nowplaying";
import Upcoming from "./pages/upcomimg";
import TopRated from "./pages/toprated";
import Popular from "./pages/popular";

import "./App.css";

function App() {
  return (
    <>
      <div className="lg:max-w-[1300px] m-auto w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/top_rated" element={<TopRated />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
