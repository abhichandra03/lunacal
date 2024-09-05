import React, { useState } from "react";
import FirstWidget from "./FirstWidget";
import SecondWidget from "./SecondWidget";

const RightPanel = () => {
  return (
    <div className="w-[720px] h-[720px]  flex flex-col justify-between items-center">
      <FirstWidget/>
      <div className="w-full max-w-[612px] h-[4px] bg-gradient-to-r from-[#2828281A] to-[#F8F8F81A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] rounded-2xl"></div>
      <SecondWidget/>
      <div className="w-full max-w-[612px] h-[4px] bg-gradient-to-r from-[#2828281A] to-[#F8F8F81A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] rounded-2xl"></div>
      </div>
  );
};

export default RightPanel;
