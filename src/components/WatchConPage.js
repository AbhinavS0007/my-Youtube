import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fixedbtn } from "../utils/HmaburgSlice";
import { useSearchParams } from "react-router-dom";

const WatchConPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fixedbtn());
  }, []);

  // const [searchParams] = useSearchParams();
  // console.log(searchParams);


const [searchParams] = useSearchParams();
// console.log(searchParams.get('v'));
const videoID = searchParams.get('v');


  return (
    <div>
      <iframe
        className="mx-6 m-4 rounded-3xl"
        width="850"
        height="500"
        src={"https://www.youtube.com/embed/"+ videoID}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchConPage;
