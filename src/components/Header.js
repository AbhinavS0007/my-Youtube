import React, { useEffect, useState } from "react";
import {
  YoutubeLogo,
  Mic,
  HamburgerButton,
  UserIcon,
  NotificationIcon,
} from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { togglebtn } from "../utils/HmaburgSlice.js";
import { Link } from "react-router-dom";
import { addSearchResultHomeVideos, goHome } from "../utils/HomeVideoSlice.js";
import { My_Youtube_API_key } from "../utils/constants.js";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(togglebtn());
  const [inputValue, setinputValue] = useState("");

  const fetchAPI = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        inputValue +
        "&type=video&key=" +
        My_Youtube_API_key
    );
    const data = await response.json();
    dispatch(addSearchResultHomeVideos(data.items));
  };
  const searchResultBtn = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    fetchAPI();
  };
  const goHomeFunc = () => {
    dispatch(goHome());
  };

  return (
    <header className=" grid grid-flow-col shadow-lg  p-3">
      <div className="h-8 col-span-1 flex ">
        <img
          onClick={handleToggle}
          className="cursor-pointer"
          src={HamburgerButton}
          alt="Button"
        ></img>

        <img
          className="h-14 mx-4 -my-3 cursor-pointer"
          src={YoutubeLogo}
          alt="Youtube"
          onClick={goHomeFunc}
        />
      </div>
      <div className="flex col-span-10  justify-center">
        <input
          className="border rounded-l-full  border-gray-400 px-5 w-1/2"
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button
          className="w-20 p-1  border bg-slate-200 rounded-r-full border-gray-300"
          onClick={searchResultBtn}
        >
          Search
        </button>
        <img
          className="h-7 bg-slate-200 ml-3 cursor-pointer"
          src={Mic}
          alt="mic"
        />
      </div>
      <div className="flex h-8  col-span-1  space-x-6 justify-end">
        <img
          className="cursor-pointer"
          src={NotificationIcon}
          alt="Notification"
        />

        <img className="cursor-pointer" src={UserIcon} alt="User" />
      </div>
    </header>
  );
};

export default Header;
