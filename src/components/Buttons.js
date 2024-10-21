import React from "react";

const Buttons = () => {
  const ButtonList = [
    "All",
    "Music",
    "Mixes",
    "Live",
    "New to You"
    
  ];
  ButtonList.push("Kapil Sharma")
  // console.log(ButtonList[0]);
  return (
    <div className="flex font-bold   ">
      {ButtonList.map((button) => (
        <button key={button} className="border w-auto px-5  mx-3 rounded-xl">{button}</button>
      ))}
    </div>
  );
};

export default Buttons;
