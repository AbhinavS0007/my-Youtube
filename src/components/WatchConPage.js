import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fixedbtn } from "../utils/HmaburgSlice";
import { useSearchParams } from "react-router-dom";
import CommentPage from "./CommentPage";
import ChannelVideoDetails from "./ChannelVideoDetails";
import { Youtube_Live_Events_API } from "../utils/constants";
import LiveChitChat from "./LiveChitChat";

const WatchConPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fixedbtn());
  }, []);

  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  // console.log(videoID);

  return (
    <div className="h-auto max-w-screen grid">
      <div className="flex">
        <div className=" mt-5 mx-5 bbg-red-500">
          <div className="">
            <iframe
              className=" rounded-3xl"
              width="950"
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
            <ChannelVideoDetails vid={videoID} />
          </div>
          <div>
            <CommentPage Vid={videoID} />
          </div>
        </div>
        
        <div className="grid h-full w-full m-4 ">
          <div className="">
            <LiveChitChat vid={videoID} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default WatchConPage;
