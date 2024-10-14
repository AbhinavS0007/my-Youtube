import React, { useEffect, useState } from "react";
import {
  My_Youtube_API_key,
  Youtube_Live_Events_API,
} from "../utils/constants";
import {
  Cross_button,
  Scroll_down_V_button,
  Three_dots_button,
} from "../utils/Icons";
import ChitChatCard from "./ChitChatCard";
import { Video_details_by_ID_options } from "../utils/ApiFetch";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const LiveChitChat = ({ vid }) => {
  const [liveMessages, setliveMessages] = useState("");
  const dispatch = useDispatch();
  // console.log(vid);
  const vid1 = "FNCp6IQb0gU";
  const [isLiveContent, setisLiveContent] = useState(true);

  const livechattesting = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${vid}&key=${My_Youtube_API_key}`
    );
    const data = await response.json();
// console.log(data.items[0].snippet.liveBroadcastContent);

if (data.items[0].snippet.liveBroadcastContent !== "live" || data.items[0].snippet.liveBroadcastContent === "none") {
  setisLiveContent(false);
  return null;
}
    const activeLiveChatId =
      data.items[0].liveStreamingDetails.activeLiveChatId;
    
    // if(!activeLiveChatId)return;

    const Live_Chat_Events = await fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${activeLiveChatId}&part=snippet,authorDetails&maxResults=2000&key=${My_Youtube_API_key}`
    );
    const data2 = await Live_Chat_Events.json();
    setliveMessages(data2.items);
    dispatch(addMessages(data2.items));
  };

  useEffect(() => {
    const i = setInterval(() => {
      livechattesting();
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  // const messages =  useSelector((store)=>store.liveChat.messages)
  // console.log(messages);

  return (
    <>
      {isLiveContent && (
        <div className="m-5">
          <div className="h-16 border flex justify-between ">
            <button className="flex p-4 ">
              <h1>Top chat</h1>
              <img className="w-4 h-3 my-2 mx-2" src={Scroll_down_V_button} />
            </button>
            <div className="flex mx-4">
              <button>
                <img className="w-9 mx-3" src={Three_dots_button} />
              </button>
              <button>
                <img className="w-8" src={Cross_button} />
              </button>
            </div>
          </div>
          <div className=" w-96 h-96 border  overflow-y-scroll flex flex-col">
            <ChitChatCard mess="this is my message" />
          </div>
          <div className="flex justify-center h-12 border">
            <input
              className="border w-76 h-6 p-4 my-2 rounded-xl "
              type="text"
            />
            <button className="font-bold m-3 w-16 border h-7 rounded-2xl bg-green-100">
              send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChitChat;
