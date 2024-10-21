import React, { useEffect, useState } from "react";
import SuggestedCards from "./SuggestedCards";
import { suggestedVideos_options } from "../utils/constants";

const SuggestedVideos = ({vidid}) => {
    console.log(vidid);
    
    const [suggestedVideosRes, setsuggestedVideosRes] = useState([]);
  const suggestedVideos_url =
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${vidid}&part=id%2Csnippet&type=video&maxResults=50`;

  const suggestedVideos = async () => {
    try {
      const response = await fetch(
        suggestedVideos_url,
        suggestedVideos_options
      );
      const result = await response.json();
    //   console.log(result.items);
      setsuggestedVideosRes(result.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    suggestedVideos();
  }, []);
//   if(suggestedVideosRes.length == 0) return ;

//   console.log(suggestedVideosRes);
  

  return (
    <div className="h-full w-full">
        {  suggestedVideosRes.length > 0 && suggestedVideosRes.map((val)=>(
            <SuggestedCards res={val}/> 
        ))}
     
    </div>
  );
};

export default SuggestedVideos;
