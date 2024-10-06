import React, { useEffect, useState } from "react";
import { Comment_options } from "../utils/ApiFetch";
import Comments from "./Comments";

const CommentPage = ({ Vid }) => {
  const [comments, setcomments] = useState("");
  const Comment_url =
    "https://yt-api.p.rapidapi.com/comments?id=" +
    Vid +
    "&sort_by=newest&geo=IN&lang=en";

  const fetchComments = async () => {
    const response = await fetch(Comment_url, Comment_options);
    const data = await response.json();
    setcomments(data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  if (!comments) return;
  return (
    <div className="my-5">
      <div className="flex">
        <h1 className="font-bold text-2xl">
          {comments.commentsCount} Comments
        </h1>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        {comments.data.length > 1 ? (
          comments.data.map((val, index) => (
            <Comments key={index} comments={val} />
          ))
        ) : (
          <p>No comments yet.</p> // Optional message if no comments
        )}
      </div>
    </div>
  );
};

export default CommentPage;
