import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full py-16 mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] p-2 font-medium">
          Inspiring, educating, and enabling people to do more with less
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow in technology.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Easy, flexible dabbling for{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Students", "Developers", "Free Lancers"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          We work with our clients and partners on projects that augment work
          and free human time.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
