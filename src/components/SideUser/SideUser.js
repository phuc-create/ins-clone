import React, { useState, useEffect } from "react";
import User from "../../img/user1.jpg";
import User2 from "../../img/user2.jpg";
import User4 from "../../img/user4.jpg";
import User6 from "../../img/user6.jpg";
import User7 from "../../img/user7.jpg";
import "./SideUser.css";
const SideUser = () => {
  const [left, setLeft] = useState((window.innerWidth - 960) / 2 + 645);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let leftNow = window.innerWidth - ((window.innerWidth - 960) / 2 + 300);
      setLeft(leftNow);
    });
  }, []);
  return (
    <div className="user-recommended-side" style={{ left: left }}>
      <div className="__top-side">
        <div className="__top--side-both-col">
          <div className="__top-side-img-wrap">
            <img src={User} alt="User" />
          </div>
          <div className="__top-side--ins-n">
            <span>Celena_0221</span>
            <span>Join Celena</span>
          </div>
        </div>

        <div className="__top-side-gopage">Transfer</div>
      </div>
      <div className="__mid-side">
        <div className="__mid-side-suggestion">
          <div className="__suggestion--title">Suggestions for you</div>
          <div className="__suggestion--all">See all</div>
        </div>
        {/* User Suggesstion for you */}
        <div className="__suggestion-side">
          <div className="__suggestion-both-col">
            <div className="__suggestion-side-img-wrap">
              <img src={User4} alt="User" />
            </div>
            <div className="__suggestion-side--ins-n">
              <span>Jona_imgood</span>
              <span>Marick Jona</span>
            </div>
          </div>

          <div className="__top-side-gopage">Monitor</div>
        </div>
        <div className="__suggestion-side">
          <div className="__suggestion-both-col">
            <div className="__suggestion-side-img-wrap">
              <img src={User7} alt="User" />
            </div>
            <div className="__suggestion-side--ins-n">
              <span>Evan0621</span>
              <span>Evan Philip</span>
            </div>
          </div>

          <div className="__top-side-gopage">Monitor</div>
        </div>
        <div className="__suggestion-side">
          <div className="__suggestion-both-col">
            <div className="__suggestion-side-img-wrap">
              <img src={User2} alt="User" />
            </div>
            <div className="__suggestion-side--ins-n">
              <span>Microsoft2021</span>
              <span>Bill Gate in instagram</span>
            </div>
          </div>

          <div className="__top-side-gopage">Monitor</div>
        </div>
        <div className="__suggestion-side">
          <div className="__suggestion-both-col">
            <div className="__suggestion-side-img-wrap">
              <img src={User6} alt="User" />
            </div>
            <div className="__suggestion-side--ins-n">
              <span>DC_777</span>
              <span>Dominic cateria</span>
            </div>
          </div>

          <div className="__top-side-gopage">Monitor</div>
        </div>
        {/* User Suggesstion for you */}
      </div>
      <div className="__bot-side">
        <ul className="__bot-side-wrapper">
          <li className="__bot-side-hashtags">
            <a href="/">Introduce</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Help</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Newspapers</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">FIRE</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Job</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Privacy</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Rules</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Location</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">The most relevant account</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Hashtag</a>
          </li>
          <li className="__bot-side-hashtags">
            <a href="/">Language</a>
          </li>
        </ul>
        <div className="__bot-side-lisence">
          © 2021 INSTAGRAM CLONE BY NGUYEN HUU PHUC
        </div>
      </div>
    </div>
  );
};

export default SideUser;
