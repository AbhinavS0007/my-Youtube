import React, { useEffect, useState } from 'react'
import { Video_deatil_options } from '../utils/ApiFetch';

const ChannelVideoDetails = ({vid}) => {

    const [videoDetail, setvideoDetailss] = useState("")
    const Video_deatil_url = 'https://yt-api.p.rapidapi.com/video/info?id='+vid;

    const fetchVideoDeatils = async () => {
        const response = await fetch(Video_deatil_url, Video_deatil_options);
        const data = await response.json();
        // console.log(data);
        setvideoDetailss(data)
      };
      useEffect(() => {
        fetchVideoDeatils();
      }, []);

  return (
    <div className=''>
      <h1 className="font-bold my-1 text-2xl ">
        {videoDetail.title}
        </h1>
        <div className="flex">
          <div>this is channel name etc</div>
          <div>like dslike and share buttons </div>
        </div>
        <div>
        <h3>this is discription</h3>
      </div>
    </div>
  )
}

export default ChannelVideoDetails
