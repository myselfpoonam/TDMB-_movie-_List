import React from "react";

import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import MovieList from "./Pages/MovieList";

const App = () => {
  return (
    <div className="bg-blue-200 h-full w-full">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
