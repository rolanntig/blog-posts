import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import freddy from "./image/freddy.jpeg";
import freddyurur from "./image/freddyurur.jpeg";
import ururur from "./image/ururur.jpeg";

const App = () => {
  return (
    <div className="ui comment">
      <UserCard>
        <SingleComment
          img={freddy}
          author="freddy"
          date="Today at 6:05PM"
          text="freedy fazbear ur ur ur"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          img={freddyurur}
          author="freddyurur"
          date="Today at 6:10PM"
          text="freedy fazbear ur ur ur"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          img={ururur}
          author="ururur"
          date="Today at 6:15PM"
          text="freedy fazbear ur ur ur"
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
