import React from "react";
import User1 from "../../img/user1.jpg";
import User2 from "../../img/user2.jpg";
import User3 from "../../img/user3.jpg";
import User4 from "../../img/user4.jpg";
import User5 from "../../img/user5.jpg";
import User6 from "../../img/user6.jpg";
import User7 from "../../img/user7.jpg";
import "./Feed.css";
import SinglePost from "./SinglePost";
const Feed = () => {
  const demoStory = [
    { id: 1, img: User1, name: "Join Celena" },
    { id: 2, img: User2, name: "Bill Gate" },
    { id: 3, img: User3, name: "Maria Collin" },
    { id: 4, img: User4, name: "Marick Jona" },
    { id: 5, img: User5, name: "Evan Philip" },
    { id: 6, img: User6, name: "Phuc Nguyen" },
    { id: 7, img: User7, name: "Domini..." },
  ];

  return (
    <div className="story-feed-side">
      <div className="new-story-header">
        <div className="new-story-header-wrapper">
          {demoStory.map((user) => {
            return (
              <div className="user-single-story" key={user.id}>
                <div className="user-story-border-linear">
                  <div className="wrap-img-user-story">
                    <img src={user.img} alt="UserFeed" />
                  </div>
                </div>
                <div className="user-name-txt">{user.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
};

export default Feed;
