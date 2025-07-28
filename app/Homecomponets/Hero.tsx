import React from "react";

const hero = () => {
  return (
    <div className="text-center px-4 py-16 bg-white text-black">
      <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
        Innovate Boundlessly, One <br className="hidden md:block" />
        Idea, Infinite Possibilities
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg mb-8">
        Discover our innovative 3D generator that transforms your design ideas
        into stunning visualizations,making it easy to create the perfect space
        tailored to your taste.
      </p>
      
  <div className="flex justify-center gap-4 mb-10 flex-wrap">
    <button className="bg-black text-white px-6 py-3 rounded-full font-medium">Get Started Now</button>
    <button className="border border-black px-6 py-3 rounded-full font-medium">Watch Video</button>
  </div>
  <div className="flex flex-row justify-between w-full">
    <div className="w-[33%]flex justify-center  gap-x-4 flex-wrap mb-6">
    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">3D Model</span>
    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">Pattern & Texture</span>
    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">Background</span>
  </div>
    <p className="w-[33%] items-center text-sm text-gray-500">No Boundaries. No Restrictions. Just Innovation</p>
  <p className="w-[33%]text-xs mt-2 text-gray-400">Base On Chat GPT</p>
  </div>
  <div className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/asset/ships.jpg')" }} >

  </div>
    </div>
  );
};

export default hero;
