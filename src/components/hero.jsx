import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Star from "../assets/star.svg";

function hero() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_TMDB_API);
        const data = await response.json();
        setData(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("This is an error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat h-96 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-neutral-950">
          Welcome to Movie4You
        </h1>
        <p className="text-lg text-neutral-950">
          Find your favorite movies and TV shows
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search your favorite movies"
            className="p-2 w-96 rounded-l-lg"
          />
          <button className="bg-red-700 p-2 rounded-r-lg text-neutral-950">
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-start items-center px-8 mb-8">
        <h1 className="text-4xl px-4 font-semibold">Trending🔥</h1>
      </div>

      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-12  ">
          {isLoading
            ? // Skeleton loading state
              Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} height={320} />
              ))
            : // Actual data rendering
              data.map((movie) => (
                <div
                  key={movie.id}
                  className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg group"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-t-lg "
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                      <h2 className="text-lg font-semibold flex justify-between items-center">
                        {movie.title}
                        <div className="flex justify-center items-center gap-1">
                          <img src={Star} alt="star" className="w-4 h-4 ml-1" />{" "}
                          {movie.vote_average.toFixed(1)}
                        </div>
                      </h2>

                      <p className="text-sm text-gray-300 line-clamp-3">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </SkeletonTheme>
    </>
  );
}

export default hero;
