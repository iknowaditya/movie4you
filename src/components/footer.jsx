import React from "react";

export default function footer() {
  return (
    <footer className="">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <div className="text-3xl font-extrabold font-serif">
              Movie<span className="text-red-500 text-4xl">4</span>you.
            </div>
          </a>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="/now_playing"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Now Playing
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="/popular"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Popular
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                href="/top_rated"
              >
                Top Rated
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="/upcoming"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Upcoming
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2023 Movie4you. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
