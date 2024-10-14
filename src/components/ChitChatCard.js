import React from "react";
import { useSelector } from "react-redux";

const ChitChatCard = ({ mess }) => {
  // const message =  useSelector((store)=>store.liveChat.messages)
  // console.log("this s")
  // console.log(mess);

  const messages = useSelector((store) => store.liveChat.messages);
  // console.log(messages);
  messages.map((val) => {
    val.map((mes) => {
      // console.log(mes.authorDetails.displayName);
      // console.log(mes.snippet.displayMessage);
      // console.log(mes.authorDetails.profileImageUrl);
    });
  });

  return(
    <>
    {
      messages.map((val) => {
        return val.map((mes) => {
          return (
            <div className="flex items-center  my-1 shadow-sm p-2   w-96" key={mes.id}>
              <img
                className="w-10 rounded-3xl"
                alt="user"
                src={mes.authorDetails.profileImageUrl}
              />
              <span className="font-bold text-base px-2 h-auto">{mes.authorDetails.displayName}</span>
              <span >{mes.snippet.displayMessage}</span>
            </div>
          );
        });
      })
    }
    </>
  )

  // return (

  //   <>
  //     messages.map(((val) => {
  //   val.map((mes) => {
  //     // console.log(mes.authorDetails.displayName);
  //     // console.log(mes.snippet.displayMessage);
  //     // console.log(mes.authorDetails.profileImageUrl);
  //     <div className="flex items-center bg-red-400 my-1 shadow-sm p-2 text-wrap  overflow-hidden w-96">
  //     <img
  //       className="h-8"
  //       alt="user"
  //       src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
  //     />
  //     <span className="font-bold px-2">Abhinav</span>
  //     <span>vr7X19fy8vK2trbDw8PS0tJwcHAwMDBeXl4eHh59fX0SEhKgoKBISEgjIyOYmJiysrIpKSk0NDRoaGh2dnb29vZjY2NTU1NBQUGmpqYWFhaJiYlWVlZpyJj</span>
  //   </div>
  //   })
  // })
  //   </>
    
  // );
};

export default ChitChatCard;
