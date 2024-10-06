import React from "react";
import HomeVideoCards from "./HomeVideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useHomeVideos from "../Hooks/useHomeVideos.js";

const HomeVideoCon = () => {
  const HomeVideos = useSelector((store) => store.videos?.HomeVideos);
  const SearchResult = useSelector((store) => store.videos?.SearchResultVideos);
  // console.log(SearchResult[]);
  if (SearchResult) {
    // console.log(SearchResult[0]);
  }

  useHomeVideos();

  if (!HomeVideos) return;
  <div className="justify-center  my-8 mx-8 z-55">Loading.....</div>;

  return (
    <div className="flex flex-wrap h-screen  overflow-scroll">
      {!SearchResult &&
        HomeVideos.map((videomap) => (
          <Link key={videomap.id} to={"/watch?v=" + videomap.id}>
            <HomeVideoCards video={videomap} />
          </Link>
        ))}
      {SearchResult &&
        SearchResult.map((videomap) => (
          <Link key={videomap.id} to={"/watch?v=" + videomap.id.videoId}>
            <HomeVideoCards video={videomap} />
          </Link>
        ))}
    </div>
  );
};

export default HomeVideoCon;
