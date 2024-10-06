import React from "react";

const Comments = ({comments}) => {
    // console.log(comments);
    const userIcon = comments.authorThumbnail[0].url ?  `${comments.authorThumbnail[0].url}` : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";
    
  return (
    <div className="flex justify-between my-5">
      <div className="flex">
        <div className=" justify-center">
          <img
            className="w-12 "
            src={userIcon}
          />
        </div>
        <div className="mx-4">
          <div className="flex">
            <h3 className="font-bold">{comments.authorText}</h3>
            <h4 className="mx-3">{comments.publishedTimeText}</h4>
          </div>
          <p className="mx-4">{comments.textDisplay} </p>
          <div className="flex">
            <div className="flex">
              <img
                className="w-8 m-3"
                src="https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png"
              />
              <h2 className="my-4">{comments.likesCount}</h2>
              <img
                className="w-8 m-3"
                src="data:image/png;base64,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"
              />
            </div>
            <button className="m-4 font-bold">reply</button>
          </div>
        </div>
      </div>
      <div className="">
        <button>
          <img
            className="w-8"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD7+/uVlZXc3Nzr6+uOjo6amprJycm+vr7X19fy8vK2trbDw8PS0tJwcHAwMDBeXl4eHh59fX0SEhKgoKBISEgjIyOYmJiysrIpKSk0NDRoaGh2dnb29vZjY2NTU1NBQUGmpqYWFhaJiYlWVlZpyJj/AAADqklEQVR4nO3diXKqQBAFUEfAPYKaqImJW5L//8U8spQLMNM18Krrdt3zBX0Lhdmn1yMiIiIiIiIiIrJmPsyLzXJT5MO5din/wyh31/KRdkEdGxfuXjHWLqpD2bGSr3TMtAvryqw2X8nIY0waAzq31S6uCytPQOdW2uW1N/QGdG6oXWBbo0BA58A/G9NgQOf22kW28ipI+KpdZBsTQUDnJtpltrAQJVxolxkvEwV0Drdt8yRM+KRdaLSTMOFau9BYfWFA5/rapUaaixOi9oifxQmftUuN5OtU3Eq0S400ECccaJcayX5C+7/SszjhWbvUSOG+4R/UPqK0WQrcMH0UBnzXLjSafxDqAnc4StpsQ220/fMiCviiXWYLspYpaqv0m+QhIj9C2ScR9WP4K/w6xX2R/toFAu60C2xtv/QGXKIOYFyZVqd/L4qpdnmdqJ8BLh21S+tK07gp7jhpRVY3vL+A7VHUSu9noV5T7ZI6t5+9/fWmHt9m2JOGHlk6SW39OImIiIiIiIiIiIiICFM6TgaDQTK2N+1U6o8PV3NrByP7Yy/21fXCiakJtvrVwqgrg6um64Z5/LWNlRi9tCFfycQ758ET0LkH7fLaC20jRd5A+i28mh39v3gKJjxpl9iOZBcp9MooyXZ87N/phyjhh3aZ8aTbZHHXmI6FCXGb4YdwuG8H7UKjCQM6p11oLF+D9BZq81T6N8RtnYaOF7pAPWjI/k5n+wnt7+WWHt6C2/j29+6vob5L7X8P7bdphAdhIR+F1Xzo5S3cvoX9/qHwm4/6vS/tRQmhp2gkH33wCZpTMCD4eKlgzBt+K1vo9A/gUz/+mJ978s8+wc88/TA/B9yzP4/fq1+LAdxWq2V9Pc2PdHROBsl5BNvhJSIiIiIiIiIiIiIiQ9LJZGJ21sL6OcLWz4LOPmumgD/h15lcmD+T3fq5+t67EXYGVmP0/fdbbPDXK5y8AfEX7tm/Z8b+XUEbQULo+57s39ll/t41+3fn2b//8F2YcKldaCz795Dav0tWvocUdbWw/X3A9vdy20+4FSfcapcaSbqF1LmZdqmRpI023GabdJMs8DbZkzAg7kiG9PgW3HFTacMUtVnakx6FhXsQlvRkDOg5mlwQMNcushXJhnzwqcTwGTXwO4FDzW/UjtMV/3AU7iDUFV9H2MATLDX3MVD7FBVZ/SzwEbgtU/Gwq+Tbwb9E74xuP/456gCi13y4WhfLYr0aovZ4iYiIiIiIiIiImn0B9U4kf9bof30AAAAASUVORK5CYII="
          />
        </button>
      </div>
    </div>
  );
};

export default Comments;
