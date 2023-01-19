import { useMeQuery } from "graphql/user.gql";
import React from "react";
import Hero from "./Hero.svg";
const Home = () => {
  const [{ data, fetching, error }] = useMeQuery({});

  console.log(data);
  console.log(fetching);
  console.log(error);
  return (
    <div className="container mx-auto px-4 my-2">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <Hero fill="indigo" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Best expense manager in the planet!
          </h1>
          <p className="text-gray-500">Keep track of your expenses</p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="
                w-full flex 
                items-center 
                justify-center 
                px-8 py-3 border 
                border-transparent 
                text-base 
                font-medium 
                rounded-md 
                text-white 
                bg-indigo-600 
                hover:bg-indigo-700 
                md:py-4 
                md:text-lg 
                md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-100 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
