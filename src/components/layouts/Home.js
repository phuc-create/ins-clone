import React from "react";
import Feed from "../Feed/Feed";
import SideUser from "../SideUser/SideUser";

const Home = () => {
  return (
    <div className="main-feed-wrapper">
      <div className="feed-board-content">
        <Feed />
        <SideUser />
      </div>
    </div>
  );
};

export default Home;
