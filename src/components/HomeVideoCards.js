import React from "react";

const HomeVideoCards = ({video}) => {
  // console.log(video);

  // return; 
  return (
    <div className="mx-7 my-5">
      <div className="w-60 ">
      <div>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className="text-justify my-4 ">
        <h2 >{video.snippet.title}</h2>
        <h3> channel name - { video.snippet.channelTitle}</h3>
        {/* <h2>total {video.statistics.viewCount} views</h2> */}
        <h2>publish time - {video.snippet.publishedAt}</h2>
      </div>
    </div>
    </div>
  );
};

export default HomeVideoCards;
