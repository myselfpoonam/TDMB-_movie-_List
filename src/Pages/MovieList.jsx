import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MovieList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=23e9efd7fcc25acf48d0ae2cab434317"
        );
        const value = await response.json();
        setData(value.results);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="text-2xl">
        <div className="bg-blue-900 w-full  fixed z-10 shadow-2xl h-28 pt-8">
          <div className="flex justify-center gap-8 text-white">
            <h1 className="text-5xl font-bold">Most Popular Movie</h1>
            <div className="text-6xl">
              <BiSolidCameraMovie />
            </div>
          </div>
        </div>
        {loading ? (
          <p>
            <AiOutlineLoading3Quarters />
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-20 pt-36 pb-8">
            {data.map((items) => (
              <div key={items.id}>
                <Link to={`/moviedetails/${items.id}`}>
                  <div className="relative group ">
                    <div className="w-[400px] h-[600px] shadow-xl rounded-xl overflow-hidden transition-opacity duration-300 group-hover:opacity-70">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                        className="w-full h-full transition-all duration-300 transform scale-100 group-hover:scale-110 "
                        alt={items.title}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 backdrop-opacity-95 text-black text-3xl text-center font-bold bg-white/30 p-4 hidden group-hover:block">
                      {items.title}
                    </div>
                  </div>
                  <div className="text-font text-3xl mt-2">
                    <span className="font-bold text-red-800">
                      Release Date :{" "}
                    </span>
                    {items.release_date}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
