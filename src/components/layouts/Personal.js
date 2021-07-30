import React, { Fragment } from "react";
import User1 from "../../img/user1.jpg";
import St1 from "../../img/userStory1.jpg";
import St2 from "../../img/userStory2.jpg";
import St3 from "../../img/userStory3.jpg";
import Rl1 from "../../img/reels1.jpg";
import Rl2 from "../../img/reels2.jpg";
import Rl3 from "../../img/reels3.jpg";
import Rl4 from "../../img/reels4.jpg";
import { RiSettingsLine } from "react-icons/ri";
import {
  BsGrid3X3,
  BsFilm,
  BsBookmark,
  BsTag,
  BsBookmarks,
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import "./layouts.css";

const Personal = () => {
  const demoStoryUser = [
    { id: 1, img: St1, title: "Join Here" },
    { id: 2, img: St2, title: "Hi There" },
    { id: 3, img: St3, title: "VCO_2021" },
  ];
  const PictureBoard = [
    {
      id: 1,
      img: User1,
      like: 30,
      comment: 30,
    },
    {
      id: 2,
      img: St2,
      like: 30,
      comment: 2,
    },
    {
      id: 3,
      img: User1,
      like: 3,
      comment: 10,
    },
    {
      id: 4,
      img: St3,
      like: 6,
      comment: 14,
    },
    {
      id: 5,
      img: St1,
      like: 3,
      comment: 3,
    },
    // {
    //   id: 6,
    //   img: St2,
    // },
  ];
  const ReelsBoard = [
    {
      id: 1,
      img: Rl1,
      like: 67,
      comment: 202,
      views: 201,
    },
    {
      id: 2,
      img: Rl2,
      like: 102,
      comment: 222,
      views: 11,
    },
    {
      id: 3,
      img: Rl3,
      like: 14,
      comment: 2,
      views: 278,
    },
    {
      id: 4,
      img: Rl4,
      like: 10,
      comment: 20,
      views: 2,
    },
  ];
  const chunkArr = (arr, size) => {
    let arrLength = arr.length;
    let tempArr = [];
    for (let i = 0; i < arrLength; i += size) {
      let chunk = arr.slice(i, i + size);
      tempArr.push(chunk);
    }
    return tempArr;
  };
  const posts = chunkArr(PictureBoard, 3);
  const reels = chunkArr(ReelsBoard, 3);
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="account-user-container">
        <div className="user-container-top">
          <div className="ctn__top--img-wrap">
            <img src={User1} alt="Nguyen Huu Phuc" />
          </div>
          <div className="ctn__top--rs">
            <div className="__header-rs">
              <div className="__header-rs-wrapper">
                <div className="__header-rs-userName">Joincelena1592</div>
                <button className="__header-rs-btn-edit-account">
                  Edit profile
                </button>
                <RiSettingsLine className="__header-rs-btn-edit-v2" />
              </div>
              <button className="__header-rs-btn-edit-account-v2">
                Edit profile
              </button>
            </div>
            <ul className="__section-rs-middle hidden-responsive">
              <li>
                <span>4 </span>posts
              </li>
              <li>
                <span>20 </span>follower
              </li>
              <li>
                Following<span> 33 </span>users
              </li>
            </ul>
            <div className="__section-user--bit-dt">
              <h1 className="user--bit-rnDt">Join Celena</h1>
              <p className="user--bit-stDt">
                📷 Photographer.
                <br />
                🎴 Graphic Designer.
                <br />
                🎨 Artist based on London. also interested in Web Developper.
                <br />
                Facebook:&nbsp;
                <a href="https://www.facebook.com/NHP1492/">
                  www.facebook.com/NHP1492/
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="__section-user--bit-dt actived-responsive-mobile">
          <h1 className="user--bit-rnDt">Join Celena</h1>
          <p className="user--bit-stDt">
            📷 Photographer <br />
            🎴 Graphic Designer <br />
            🎨 Artist based on London also interested in Web Developper
            <br />
            Facebook:&nbsp;
            <Link to="https://www.facebook.com/NHP1492/">
              www.facebook.com/NHP1492/
            </Link>
          </p>
        </div>

        <div className="user-container-relevant-story">
          {demoStoryUser.map((st) => {
            return (
              <div className="user-single-story" key={st.id}>
                <div className="user-story-border-linear">
                  <div className="wrap-img-user-story">
                    <img src={st.img} alt="UserFeed" />
                  </div>
                </div>
                <div className="user-name-txt">{st.title}</div>
              </div>
            );
          })}
        </div>
        <ul className="__section-rs-middle actived-responsive">
          <li>
            <span>4 </span>
            <br />
            posts
          </li>
          <li>
            <span>20 </span>
            <br />
            follower
          </li>
          <li>
            Following
            <br />
            <span> 33 </span>
            <br />
            users
          </li>
        </ul>
        <div className="user-container-bot">
          <ul className="user__page--control">
            <li className="__page--control-option">
              <Link to={`${url}`}>
                <BsGrid3X3 className="__page-ctrl-icon" />
                <span>posts</span>
              </Link>
            </li>
            <li className="__page--control-option">
              <Link to={`${url}/reels`}>
                <BsFilm className="__page-ctrl-icon" />
                <span>reels</span>
              </Link>
            </li>
            <li className="__page--control-option">
              <Link to={`${url}/igtv`}>
                <BsBookmark className="__page-ctrl-icon" />
                <span>saved</span>
              </Link>
            </li>
            <li className="__page--control-option">
              <Link to={`${url}/tagged`}>
                <BsTag className="__page-ctrl-icon" />
                <span>tagged</span>
              </Link>
            </li>
          </ul>
          <section className="user__page--actived-op">
            <Route path={`${path}/`} exact>
              <PostsOption posts={posts} />
            </Route>
            <Route path="/account/reels">
              <ReelsOption reels={reels} />
            </Route>
            <Route path={`${path}/igtv`}>
              <IgtvOption />
            </Route>
            <Route path={`${path}/tagged`}>
              <TaggedOption />
            </Route>
          </section>
        </div>
      </div>
    </Router>
  );
};

export default Personal;

const PostsOption = ({ posts }) => {
  console.log(posts);
  return (
    <div className="PostOption-page-control">
      {posts.map((wrapper, i) => {
        return (
          <div className="PostOption-img-wrapper" key={i}>
            {wrapper.length === 1 ? (
              <Fragment>
                {wrapper.map((img) => {
                  return (
                    <div className="PostOption-single" key={img.id}>
                      <img src={img.img} alt="Hello World" />
                      <div className="like-count-cmt-count">
                        <span className="postCounting">
                          {img.like}&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width="18"
                            height="18"
                            viewBox="0 0 391.837 391.837"
                            xmlSpace="preserve"
                          >
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58   c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0   c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
                            />
                          </svg>
                        </span>
                        <span className="postCounting">
                          {img.comment}&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18"
                            height="18"
                            viewBox="0 0 35.99 35.991"
                            xmlSpace="preserve"
                          >
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M35.49,17.416c0,3.613-1.594,6.91-4.217,9.453v6.248l-6.248-2.39c-2.152,0.789-4.527,1.232-7.03,1.232    C8.333,31.959,0.5,25.448,0.5,17.417c0-8.031,7.833-14.543,17.495-14.543S35.49,9.385,35.49,17.416z"
                            />
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M31.273,33.617c-0.061,0-0.121-0.011-0.179-0.033l-6.074-2.323c-2.234,0.796-4.597,1.199-7.025,1.199    C8.073,32.459,0,25.711,0,17.417S8.073,2.374,17.995,2.374c9.923,0,17.995,6.748,17.995,15.042c0,3.531-1.496,6.954-4.217,9.663    v6.038c0,0.165-0.081,0.318-0.217,0.412C31.473,33.586,31.373,33.617,31.273,33.617z M25.025,30.227    c0.061,0,0.121,0.011,0.179,0.033l5.569,2.13v-5.521c0-0.136,0.055-0.265,0.152-0.359c2.621-2.541,4.064-5.771,4.064-9.094    c0-7.743-7.624-14.042-16.995-14.042S1,9.673,1,17.417s7.624,14.043,16.995,14.043c2.375,0,4.683-0.404,6.858-1.202    C24.909,30.237,24.967,30.227,25.025,30.227z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="PostOption-single"></div>
                <div className="PostOption-single"></div>
              </Fragment>
            ) : (
              wrapper.map((img) => {
                return (
                  <div className="PostOption-single" key={img.id}>
                    <img src={img.img} alt="Hello World" />
                    <div className="like-count-cmt-count">
                      <span className="postCounting">
                        {img.like}&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="18"
                          height="18"
                          viewBox="0 0 391.837 391.837"
                          xmlSpace="preserve"
                        >
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58   c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0   c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
                          />
                        </svg>
                      </span>
                      <span className="postCounting">
                        {img.comment}&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="18"
                          height="18"
                          viewBox="0 0 35.99 35.991"
                          xmlSpace="preserve"
                        >
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M35.49,17.416c0,3.613-1.594,6.91-4.217,9.453v6.248l-6.248-2.39c-2.152,0.789-4.527,1.232-7.03,1.232    C8.333,31.959,0.5,25.448,0.5,17.417c0-8.031,7.833-14.543,17.495-14.543S35.49,9.385,35.49,17.416z"
                          />
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M31.273,33.617c-0.061,0-0.121-0.011-0.179-0.033l-6.074-2.323c-2.234,0.796-4.597,1.199-7.025,1.199    C8.073,32.459,0,25.711,0,17.417S8.073,2.374,17.995,2.374c9.923,0,17.995,6.748,17.995,15.042c0,3.531-1.496,6.954-4.217,9.663    v6.038c0,0.165-0.081,0.318-0.217,0.412C31.473,33.586,31.373,33.617,31.273,33.617z M25.025,30.227    c0.061,0,0.121,0.011,0.179,0.033l5.569,2.13v-5.521c0-0.136,0.055-0.265,0.152-0.359c2.621-2.541,4.064-5.771,4.064-9.094    c0-7.743-7.624-14.042-16.995-14.042S1,9.673,1,17.417s7.624,14.043,16.995,14.043c2.375,0,4.683-0.404,6.858-1.202    C24.909,30.237,24.967,30.227,25.025,30.227z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        );
      })}
      {/* <div className="PostOption-img-wrapper">
        <div className="PostOption-single">
          <img src={User1} alt="Hello World" />
        </div>
        <div className="PostOption-single">
          <img src={St2} alt="Hello World" />
        </div>
        <div className="PostOption-single">
          <img src={User1} alt="Hello World" />
        </div>
      </div>
      <div className="PostOption-img-wrapper">
        <div className="PostOption-single">
          <img src={User1} alt="Hello World" />
        </div>
        <div className="PostOption-single"></div>
        <div className="PostOption-single"></div>
      </div> */}
    </div>
  );
};
const ReelsOption = ({ reels }) => {
  return (
    <div className="PostOption-page-control">
      {reels.map((wrapper, i) => {
        return (
          <div className="PostOption-img-wrapper" key={i}>
            {wrapper.length === 1 ? (
              <Fragment>
                {wrapper.map((img) => {
                  return (
                    <div className="PostOption-single" key={img.id}>
                      <img src={img.img} alt="Hello World" />
                      <div className="ReelsViewer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="18"
                          height="18"
                          viewBox="0 0 163.861 163.861"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#ffffff"
                            d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                          />
                        </svg>
                        {img.views}
                      </div>
                      <div className="like-count-cmt-count">
                        <span className="postCounting">
                          {img.like}&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width="18"
                            height="18"
                            viewBox="0 0 391.837 391.837"
                            xmlSpace="preserve"
                          >
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58   c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0   c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
                            />
                          </svg>
                        </span>
                        <span className="postCounting">
                          {img.comment}&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18"
                            height="18"
                            viewBox="0 0 35.99 35.991"
                            xmlSpace="preserve"
                          >
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M35.49,17.416c0,3.613-1.594,6.91-4.217,9.453v6.248l-6.248-2.39c-2.152,0.789-4.527,1.232-7.03,1.232    C8.333,31.959,0.5,25.448,0.5,17.417c0-8.031,7.833-14.543,17.495-14.543S35.49,9.385,35.49,17.416z"
                            />
                            <path
                              style={{ fill: "#ffffff" }}
                              d="M31.273,33.617c-0.061,0-0.121-0.011-0.179-0.033l-6.074-2.323c-2.234,0.796-4.597,1.199-7.025,1.199    C8.073,32.459,0,25.711,0,17.417S8.073,2.374,17.995,2.374c9.923,0,17.995,6.748,17.995,15.042c0,3.531-1.496,6.954-4.217,9.663    v6.038c0,0.165-0.081,0.318-0.217,0.412C31.473,33.586,31.373,33.617,31.273,33.617z M25.025,30.227    c0.061,0,0.121,0.011,0.179,0.033l5.569,2.13v-5.521c0-0.136,0.055-0.265,0.152-0.359c2.621-2.541,4.064-5.771,4.064-9.094    c0-7.743-7.624-14.042-16.995-14.042S1,9.673,1,17.417s7.624,14.043,16.995,14.043c2.375,0,4.683-0.404,6.858-1.202    C24.909,30.237,24.967,30.227,25.025,30.227z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="PostOption-single"></div>
                <div className="PostOption-single"></div>
              </Fragment>
            ) : (
              wrapper.map((img) => {
                return (
                  <div className="PostOption-single" key={img.id}>
                    <img src={img.img} alt="Hello World" />
                    <div className="ReelsViewer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18"
                        height="18"
                        viewBox="0 0 163.861 163.861"
                        xmlSpace="preserve"
                      >
                        <path
                          fill="#ffffff"
                          d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                        />
                      </svg>
                      {img.views}
                    </div>
                    <div className="like-count-cmt-count">
                      <span className="postCounting">
                        {img.like}&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="18"
                          height="18"
                          viewBox="0 0 391.837 391.837"
                          xmlSpace="preserve"
                        >
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58   c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0   c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
                          />
                        </svg>
                      </span>
                      <span className="postCounting">
                        {img.comment}&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="18"
                          height="18"
                          viewBox="0 0 35.99 35.991"
                          xmlSpace="preserve"
                        >
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M35.49,17.416c0,3.613-1.594,6.91-4.217,9.453v6.248l-6.248-2.39c-2.152,0.789-4.527,1.232-7.03,1.232    C8.333,31.959,0.5,25.448,0.5,17.417c0-8.031,7.833-14.543,17.495-14.543S35.49,9.385,35.49,17.416z"
                          />
                          <path
                            style={{ fill: "#ffffff" }}
                            d="M31.273,33.617c-0.061,0-0.121-0.011-0.179-0.033l-6.074-2.323c-2.234,0.796-4.597,1.199-7.025,1.199    C8.073,32.459,0,25.711,0,17.417S8.073,2.374,17.995,2.374c9.923,0,17.995,6.748,17.995,15.042c0,3.531-1.496,6.954-4.217,9.663    v6.038c0,0.165-0.081,0.318-0.217,0.412C31.473,33.586,31.373,33.617,31.273,33.617z M25.025,30.227    c0.061,0,0.121,0.011,0.179,0.033l5.569,2.13v-5.521c0-0.136,0.055-0.265,0.152-0.359c2.621-2.541,4.064-5.771,4.064-9.094    c0-7.743-7.624-14.042-16.995-14.042S1,9.673,1,17.417s7.624,14.043,16.995,14.043c2.375,0,4.683-0.404,6.858-1.202    C24.909,30.237,24.967,30.227,25.025,30.227z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
};
const IgtvOption = () => {
  return (
    <div className="TaggedSection">
      <div className="none-tagged">
        <BsBookmarks className="tagged--photo-icon" />
        <h1 className="tagged--photo-title">Saved by you</h1>
        <p className="tagged--photo-notification">
          When you save any post of people, it will appear here.
        </p>
      </div>
      <div className="__bot-side-v2">
        <ul className="__bot-side-v2-wrapper">
          <li className="__bot-side-v2-hashtags">
            <a href="/">Introduce</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Help</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Newspapers</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">FIRE</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Job</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Privacy</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Rules</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Location</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">The most relevant account</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Hashtag</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Language</a>
          </li>
        </ul>
        <div className="__bot-side-v2-lisence">
          © 2021 INSTAGRAM CLONE BY NGUYEN HUU PHUC
        </div>
      </div>
    </div>
  );
};
const TaggedOption = () => {
  return (
    <div className="TaggedSection">
      <div className="none-tagged">
        <FaInstagram className="tagged--photo-icon" />
        <h1 className="tagged--photo-title">Photos with your face</h1>
        <p className="tagged--photo-notification">
          When people tag you in a photo, it will appear here.
        </p>
      </div>
      <div className="__bot-side-v2">
        <ul className="__bot-side-v2-wrapper">
          <li className="__bot-side-v2-hashtags">
            <a href="/">Introduce</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Help</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Newspapers</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">FIRE</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Job</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Privacy</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Rules</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Location</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">The most relevant account</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Hashtag</a>
          </li>
          <li className="__bot-side-v2-hashtags">
            <a href="/">Language</a>
          </li>
        </ul>
        <div className="__bot-side-v2-lisence">
          © 2021 INSTAGRAM CLONE BY NGUYEN HUU PHUC
        </div>
      </div>
    </div>
  );
};
