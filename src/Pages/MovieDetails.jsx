import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=23e9efd7fcc25acf48d0ae2cab434317`
        );
        const value = await response.json();
        console.log(value);
        setMovieData(value);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        <MovieDescription details={movieData} />
      </div>
    </div>
  );
};

export default MovieDetails;
