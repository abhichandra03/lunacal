import React, { useState } from "react";
import questionMark from "./../assests/questionMark.png";

const FirstWidget = () => {
  let [activeItem, setActiveItem] = useState("About");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  console.log(activeItem);

  return (
    <div className="relative w-[720px] h-[316px] flex flex-col justify-around items-center">
      <div className="relative flex flex-col w-full h-full justify-around items-center  px-12 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] rounded-2xl">
        <div className="flex w-full h-[64px] rounded-3xl bg-[#171717]  text-[#A3ADB2] shadow-[inset_rgba(0,0,0,0.25)_0px_4.96px_12.4px_2.48px]">
          <div className="relative flex w-full justify-around items-center">
            <div
              className={`flex justify-center rounded-3xl cursor-pointer w-1/3 mx-2 p-4 transition-all duration-500 ease-in-out bg-size-300 bg-pos-0 z-10 bg-gradient-to-l  from-[#2727281E] from-50% to-[#96BEE70F] to-50% ${activeItem=='About'? `hover:bg-pos-0` : `hover:bg-pos-100`}`}
              onClick={() => handleClick("About")}
            >
              About Me
            </div>
            <div
              className={`flex  justify-center rounded-3xl cursor-pointer w-1/3 mx-2 p-4 transition-all duration-500 ease-in-out bg-size-300 bg-pos-0 bg-gradient-to-l  from-[#2727281E] from-50% to-[#96BEE70F] to-50% z-10 ${activeItem=='Experiences'? `hover:bg-pos-0` : `hover:bg-pos-100`}`}
              onClick={() => handleClick("Experiences")}
            >
              Experiences
            </div>
            <div
              className={`flex justify-center rounded-3xl cursor-pointer w-1/3 mx-2 p-4 transition-all duration-500 ease-in-out bg-size-300 bg-pos-0 bg-gradient-to-l  from-[#2727281E] from-50% to-[#96BEE70F] to-50% z-10 ${activeItem=='Recommended'? `hover:bg-pos-0` : `hover:bg-pos-100`}`}
              onClick={() => handleClick("Recommended")}
            >
              Recommended
            </div>
            <span
              className={`absolute bg-[#28292F] z-0 top-1 rounded-3xl  transition-all duration-500 ease-in-out w-[200px] h-[90%]  shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)] ${
                activeItem == "About" ? `left-1` : ``
              } ${activeItem == "Recommended" ? `left-2/3` : ``} ${
                activeItem == "Experiences" ? `left-1/3` : ``
              }`}
            ></span>
          </div>
        </div>
        <div className="flex w-full h-[175px]">
          <p className="flex text-[#969696]  overflow-y-scroll scrollbar">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br /> <br />I was born and raised in Albany, NY& have been living
            in Santa Carla for the past 10 years my wife Tiffany and my 4 year
            old twin daughters- Emma and Ella. Both of them are just starting
            school, so my calender is usually blocked between 9-10 AM. This is
            a...
          </p>
        </div>

        <img src={questionMark} className="absolute top-2 left-2"></img>

        <div className="w-[15px] h-[20px] absolute left-2 top-1/2 grid grid-cols-2 gap-1">
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
        </div>
      </div>
      <div className="absolute right-4 top-1/3 w-[8px] h-[64px] bg-gradient-to-b from-[#888989] to-[#4A4E54] shadow-[4px_4px_4.9px_0px_#00000040] rounded-3xl"></div>
    </div>
  );
};

export default FirstWidget;
