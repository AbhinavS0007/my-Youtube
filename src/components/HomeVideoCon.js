import React, { useEffect, useState } from "react";
import HomeVideoCards from "./HomeVideoCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import { Link } from "react-router-dom";

const HomeVideoCon = () => {
  const [HomeVideos, setHomeVideos] = useState([]);

  const fetchHomeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    // console.log(data);
    
    setHomeVideos(data.items);
  };
  useEffect(() => {
    fetchHomeVideos();
  }, []);

  if (HomeVideos.length < 1) return;
  <div className="justify-center my-8 mx-8 z-55">Loading.....</div>;
  

  return (
    <div className="flex flex-wrap h-screen  overflow-scroll">
      {HomeVideos.map((videomap) => (
        <Link key={videomap.id} to={"/watch?v=" + videomap.id} >
          <HomeVideoCards video={videomap} />
        </Link>
      ))}
    </div>
  );
};

export default HomeVideoCon;
