import React from "react";
import Software from "../assets/software.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded"
          src={Software}
          alt="/"
        />
        <div className="flex flex-col justify-center lg:pl-4">
          <p className="text-[#00df9a] font-bold">SOFTWARE DEVELOPEMENT</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Building Awesome Solutions for clients
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            facilis nisi laboriosam odit. Omnis sequi quo maxime ducimus dicta
            quam velit. Esse vitae inventore excepturi ad laudantium quibusdam,
            unde rerum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
