import { useDispatch } from "react-redux";
import { addHomeVideos } from "../utils/HomeVideoSlice";
import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useHomeVideos = () => {
  const dispatch = useDispatch();
  const fetchHomeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    dispatch(addHomeVideos(data.items));
  };
  useEffect(() => {
    fetchHomeVideos();
  }, []);
};

export default useHomeVideos;
