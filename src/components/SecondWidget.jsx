import React, { useEffect, useRef, useState } from "react";
import questionMark from "./../assests/questionMark.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import logo from "./../assests/img.png";
import image1 from './../assests/image1.jpeg'
import image2 from './../assests/image2.jpeg'
import image3 from './../assests/image3.jpeg'
import image4 from './../assests/image4.jpeg'
import image5 from './../assests/image5.jpeg'

const SecondWidget = () => {
  const [images, setImages] = useState([image1, image2, image3, image4, image5]);
  const [selectedImage, setSelectedImage] = useState("");
  const imageRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file !== null) {
      setSelectedImage(file ? URL.createObjectURL(file) : undefined);
    }
  };

  const handleScroll = (scrollOffset) => {
    if (imageRef.current != null) {
      imageRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    if (selectedImage) {
      setImages((prevItems) => [...prevItems, selectedImage]);
    }
    setSelectedImage("");

    setInterval(() => {
      if (imageRef.current != null) {
        imageRef.current.scrollLeft += 100;
      }
    }, 1000);
  }, [selectedImage]);

  return (
    <div className="w-full max-w-[720px] h-[330px] flex flex-col justify-around items-center">
      <div className="relative  flex flex-col justify-around items-center w-full h-full py- px-12 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] rounded-2xl">
        <div className="flex w-full h-[64px] rounded-3xl">
          <div className="flex w-full justify-between items-center ">
            <p className="text-white bg-[#171717] w-[150px] flex justify-center p-4 rounded-3xl shadow-[0px_4px_10px_2px_#00000040] hover:cursor-pointer">
              Gallery
            </p>
            <ul className="flex w-1/2 justify-evenly">
              <li
                for="getFile"
                className="flex justify-center items-center bg-[#FFFFFF08] min-w-[131px] h-[46px] shadow-[9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] rounded-3xl text-white"
              >
                <input
                  id="getFile"
                  accept="image/*"
                  type="file"
                  name="image"
                  onChange={(e) => handleImage(e)}
                  className="hidden w-full h-full"
                />
                <label
                  for="getFile"
                  className="w-full h-full flex justify-center items-center hover:cursor-pointer"
                >
                  + Add Image
                </label>
              </li>
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] rounded-full text-[#6F787C] hover:cursor-pointer">
                <button onClick={() => handleScroll(-200)}>
                  <FaArrowLeft/>
                </button>
              </li>
              <li
                onClick={() => handleScroll(200)}
                className="flex justify-center items-center w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] rounded-full text-[#6F787C] hover:cursor-pointer"
              >
                <FaArrowRight/>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative flex flex-nowrap items-center justify-between p-4 w-full h-[70%] overflow-x-scroll no-scrollbar scroll-smooth "
        >
          {images.map((image, id) => (
            <div
              key={id}
              className="static flex w-full min-w-[190px] h-[179px] items-center mx-2 rounded-2xl shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] z-10 hover:scale-110 duration-500 hover:rotate-[-5deg] "
            >
              <img
                src={image}
                className=" w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 "
                alt=""
              ></img>
            </div>
          ))}
        </div>

        <img src={questionMark} className="absolute top-2 left-2" alt=""></img>
        <div className="w-[15px] h-[20px] absolute left-2 top-1/2 grid grid-cols-2 gap-1">
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
          <p className="bg-[#4A4E54] w-full h-full"></p>
        </div>
      </div>
    </div>
  );
};

export default SecondWidget;
