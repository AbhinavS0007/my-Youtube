import React from "react";
import { useSelector , useDispatch } from "react-redux";
import appStore from "../utils/AppStore";
import { Link } from "react-router-dom";
import { goHome } from "../utils/HomeVideoSlice";
// import 

const SideBar = () => {

  const dispatch = useDispatch();
  const YouList = ["History", "Playlist", "Watch Later", "Liked Videos"];
  const ExploreList = [
    "Trending",
    "Shopping",
    "Film",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Courses",
    "Fashion & Beauty",
    "Podcast",
  ];
  const SubscriptionsList = ["abhinav"];

  const goHomeFunc = () => {
    dispatch(goHome());
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" w-1/6 border h-screen overflow-scroll justify-center ">
      <div className="p-6">
        <ul className="">
          <Link to="/">
            {" "}
            <li className="py-1" onClick={goHomeFunc}>Home</li>

          </Link>
          <li className="py-1">Shorts</li>
          <li className="py-1">Subscriptions</li>
        </ul>
      </div>
      <hr></hr>

      <div className="p-6">
        <h1 className="font-bold">You </h1>
        <ul className="">
          {YouList.map((button) => (
            <li key={button} className="py-1">{button}</li>
          ))}
        </ul>
      </div>
      <hr></hr>

      <div className="p-6">
        <h1 className="font-bold">Subscriptions</h1>
        <ul className="">
          {SubscriptionsList.map((button) => (
            <li key={button} className="py-1">{button}</li>
          ))}
        </ul>
      </div>
      <hr></hr>

      <div className="p-6">
        <h1 className="font-bold">Explore</h1>
        <ul className="">
          {ExploreList.map((button) => (
            <li key={button} className="py-1">{button}</li>
          ))}
        </ul>
      </div>
      <hr></hr>

      <div className="p-6">
        <h1 className="font-bold">More from YouTube</h1>

        <ul className="">
          <li className="py-1">Youtube Premium</li>
          <li className="py-1">Youtube Music</li>
          <li className="py-1">Youtube Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
