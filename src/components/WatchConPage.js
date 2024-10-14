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
    <div className="h-auto w-screen grid ">
      <div className="flex">
        <div className="grid mt-5 mx-5">
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
        <div className="grid">
          <div className="">
            {/* <LiveChitChat vid={videoID} /> */}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-auto w-screen grid ">
      <div className="flex">
        <div className="mt-5 mx-5">
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
        <div className="">
          <LiveChitChat vid={videoID} />
        </div>
      </div>
      <div className="flex w-2/3 mx-5">
        <div className="grid">
          <div>
            <ChannelVideoDetails vid={videoID} />
          </div>
          <div>
            <CommentPage Vid={videoID} />
          </div>
        </div>
        <div>{/* this is for side suggestion videos */}</div>
      </div>
    </div>
  );

  // return (
  //   <div className="mx-6 m-4">
  //     <div className="flex w-full  ">
  //       <div>
  //         <iframe
  //           className=" rounded-3xl"
  //           width="950"
  //           height="500"
  //           src={"https://www.youtube.com/embed/" + videoID}
  //           title="YouTube video player"
  //           frameBorder="0"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           referrerPolicy="strict-origin-when-cross-origin"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  //       <div>
  //         <LiveChitChat />
  //       </div>
  //     </div>
  //     <div>
  //       <ChannelVideoDetails vid={videoID} />
  //     </div>
  //     <div className="w-3/4">
  //       <CommentPage Vid={videoID} />
  //     </div>
  //   </div>
  // );
};

export default WatchConPage;
