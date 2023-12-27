import React, { useEffect, useState } from "react";
import Status from "./Status";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MovieDescription = ({ details }) => {
  const [loading, setLoading] = useState(true);
  const timeoutId = setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="text-4xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="text-3xl p-10">
      <div className="bg-blue-900 w-[2530px] fixed shadow-2xl h-24 pt-8 mb-8">
        <div className="flex justify-center gap-8 text-white">
          <h1 className="text-4xl font-bold">
            <span className="text-white">Movie Title : </span>
            {details?.title}
          </h1>
        </div>
      </div>

      <div className="p-20 mt-20">
        <div className="mb-8">
          <h1 className="font-bold">Original Title :</h1>
          <p className="mt-2">{details?.original_title}</p>
          <h1 className="font-bold mt-4">Description :</h1>
          <p className="mt-2">{details?.overview}</p>
        </div>
        <Status />
        <table className="w-full mb-8 mt-10 border-collapse border border-gray-400">
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="font-bold p-4 border-r border-gray-400">
                Genres:
              </td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  {details?.genres &&
                    details.genres.map((items, index) => (
                      <div key={index} className="bg-slate-200 p-2 rounded-xl">
                        {items.name}
                      </div>
                    ))}
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="font-bold p-4 border-r border-gray-400">
                Release Date:
              </td>
              <td className="p-4">{details?.release_date}</td>
            </tr>
            <tr>
              <td className="font-bold p-4 border-r border-gray-400">
                Total RunTime:
              </td>
              <td className="p-4">{details?.runtime} minutes</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-8">
          <h1 className="font-bold">Production Companies :</h1>
          <div className="flex flex-wrap gap-20 mt-4">
            {details?.production_companies &&
              details.production_companies.map((value, index) => (
                <div key={index} className="flex items-center">
                  <h1 className="">{value.name} : </h1>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${value.logo_path}`}
                    alt={"Logo is not available"}
                    className="ml-2 w-44 h-26"
                  />
                </div>
              ))}
          </div>
        </div>
        <table className="w-full mb-8 border shadow-xl border-gray-400">
          <tbody>
            <tr className="flex">
              <td className="w-1/2 border-r border-gray-400">
                <h1 className="font-bold p-2">Movie Backdrop:</h1>
                {details?.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`}
                    alt="Movie Backdrop"
                    className="w-full h-50 object-cover mt-4 "
                  />
                ) : (
                  <p>No backdrop image available</p>
                )}
              </td>
              <td className="w-1/2 border-r border-gray-400">
                <h1 className="font-bold p-2">Collection Backdrop:</h1>
                {details?.belongs_to_collection?.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${details?.belongs_to_collection?.backdrop_path}`}
                    alt="Collection Backdrop"
                    className="w-full h-50 object-cover mt-4"
                  />
                ) : (
                  <p>No backdrop image available</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieDescription;
