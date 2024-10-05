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
    <div className="flex font-bold my-3">
      {ButtonList.map((button) => (
        <button key={button} className="border px-5 py-1 m-3 rounded-xl">{button}</button>
      ))}
    </div>
  );
};

export default Buttons;
