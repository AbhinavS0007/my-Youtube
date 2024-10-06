import { useDispatch } from "react-redux";
import { addHomeVideos } from "../utils/HomeVideoSlice";
import { useEffect } from "react";
import { My_Youtube_API_key, YOUTUBE_VIDEOS_API } from "../utils/constants";

const useHomeVideos = () => {
  const dispatch = useDispatch();
  const fetchHomeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API + My_Youtube_API_key);
    const data = await response.json();
    dispatch(addHomeVideos(data.items));
  };
  useEffect(() => {
    fetchHomeVideos();
  }, []);
};

export default useHomeVideos;
