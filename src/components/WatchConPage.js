import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fixedbtn } from "../utils/HmaburgSlice";
import { useSearchParams } from "react-router-dom";
import CommentPage from "./CommentPage";
import ChannelVideoDetails from "./ChannelVideoDetails";

const WatchConPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fixedbtn());
  }, []);

  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  // console.log(videoID);
  

  return (
    <div className="mx-6 m-4 w-3/5 ">
      <div>
        <iframe
          className=" rounded-3xl"
          width="850"
          height="500"
          src={"https://www.youtube.com/embed/" + videoID}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <ChannelVideoDetails vid={videoID}/>
      </div>
      
      <div>
        <CommentPage Vid={videoID}/>
      </div>
    </div>
  );
};

export default WatchConPage;
