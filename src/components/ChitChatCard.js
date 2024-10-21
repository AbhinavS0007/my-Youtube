import React from "react";
import { useSelector } from "react-redux";

const ChitChatCard = ({ mess }) => {
  const messages = useSelector((store) => store.liveChat.messages);
  return (
    <>
      {messages.map((val) => {
        return val.map((mes) => {
          return (
            <div
              className="flex items-center  my-1 shadow-sm p-2   w-96"
              key={mes.id}
            >
              <img
                className="w-10 rounded-3xl"
                alt="user"
                src={mes.authorDetails.profileImageUrl}
              />
              <span className="font-bold text-base px-2 h-auto">
                {mes.authorDetails.displayName}
              </span>
              <span>{mes.snippet.displayMessage}</span>
            </div>
          );
        });
      })}
    </>
  );
};

export default ChitChatCard;
