import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
// import { AiFillHome } from "react-icons/ai";
// import { RiMessengerLine } from "react-icons/ri";
// import { ImCompass2 } from "react-icons/im";
// import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { BiUserCircle, BiBookmark, BiRefresh } from "react-icons/bi";
import { RiSettings4Line } from "react-icons//ri";
import User from "../../img/user1.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [expandControl, setExpandControl] = useState(false);
  if (expandControl) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <div className="instagram-header-wrapper">
      <div className="instagram-navigation">
        <Link to="/" className="instagram-title">
          Instagram
        </Link>
        <div className="nav-input-search">
          <MdSearch className="icon-search" />
          <input
            type="text"
            value={value}
            placeholder="Search"
            className={focus ? "input-search max-input-search" : "input-search"}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocus(!focus)}
            onBlur={() => setFocus(!focus)}
          />
        </div>
        <div className="nav--user-control">
          <Link className="--user-control-link" to="/">
            <svg
              width="28"
              height="28"
              className="user--icon-control hidden-responsive"
              viewBox="0 0 109 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.6 56.2353H41.6V58.2353V88H18.35V47.6471V45.6471H16.35H5.3263L54.5 2.65656L103.674 45.6471H92.65H90.65V47.6471V88H67.4V58.2353V56.2353H65.4H43.6Z"
                fill="#ffffff"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </Link>
          <Link className="--user-control-link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="user--icon-control"
              height="25"
              viewBox="-1 0 26 24"
              width="25"
            >
              <path
                d="m0 11.111c0 3.496 1.744 6.615 4.471 8.652v4.237l4.086-2.242c1.09.301 2.245.465 3.442.465 6.627 0 12-4.974 12-11.111.001-6.137-5.372-11.112-11.999-11.112s-12 4.974-12 11.111zm10.734-3.112 3.13 3.259 5.887-3.259-6.56 6.962-3.055-3.258-5.963 3.259z"
                fill="#ffffff"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
          <Link className="--user-control-link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="user--icon-control hidden-responsive"
              height="24"
              viewBox="0 0 512 512"
              width="24"
            >
              <path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
              <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
              <path
                d="m453.332031 512h-394.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-394.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h394.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v394.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm-394.664062-480c-14.699219 0-26.667969 11.96875-26.667969 26.667969v394.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h394.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-394.664062c0-14.699219-11.96875-26.667969-26.667969-26.667969zm0 0"
                fill="#000000"
              />
            </svg>
          </Link>
          <Link className="--user-control-link" to="/">
            <svg
              height="25"
              className="user--icon-control font-size-diff hidden-responsive"
              viewBox="0 0 512 512"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m304 304-96-96" fill="none" />
                <path d="m303 319c-4.095 0-8.189-1.562-11.313-4.687l-94-94c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l94 94c6.249 6.248 6.249 16.379 0 22.627-3.125 3.125-7.219 4.687-11.314 4.687z" />
                <path d="m144.003 384c-4.167 0-8.258-1.628-11.317-4.687-4.525-4.526-5.919-11.313-3.542-17.256l64-160c1.626-4.065 4.848-7.287 8.913-8.913l160-64c5.944-2.377 12.73-.983 17.256 3.542 4.525 4.526 5.919 11.313 3.542 17.256l-64 160c-1.626 4.065-4.848 7.287-8.913 8.913l-160 64c-1.926.771-3.941 1.145-5.939 1.145zm76.306-163.691-47.588 118.97 118.97-47.588 47.588-118.97z" />
                <path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z" />
              </g>
            </svg>
          </Link>
          <Link className="--user-control-link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="user--icon-control hidden-responsive"
              height="24"
              width="24"
              viewBox="0 0 477.534 477.534"
            >
              <path
                d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909
			l-8.431-8.909C181.284,5.762,98.662,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778
			c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654
			c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z M413.787,234.226h-0.017
			L238.802,418.768L63.818,234.226c-39.78-42.916-39.78-109.233,0-152.149c36.125-39.154,97.152-41.609,136.306-5.484
			c1.901,1.754,3.73,3.583,5.484,5.484l20.804,21.948c6.856,6.812,17.925,6.812,24.781,0l20.804-21.931
			c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484C453.913,125.078,454.207,191.516,413.787,234.226
			z"
              />
            </svg>
          </Link>
          {/* <AiFillHome className="user--icon-control hidden-responsive" />
          <RiMessengerLine className="user--icon-control" /> */}
          {/* <FiPlusSquare className="user--icon-control hidden-responsive" /> */}
          {/* <ImCompass2 className="user--icon-control font-size-diff hidden-responsive" /> */}
          {/* <FiHeart className="user--icon-control hidden-responsive" /> */}
          <div
            className="nav-user-control-img"
            onClick={() => setExpandControl(!expandControl)}
          >
            <img src={User} alt="user instagram " />
            <div
              className={
                expandControl
                  ? "expand-controls-user expand-actived"
                  : "expand-controls-user"
              }
            >
              <Link to="/account" className="expand-controls-option">
                <BiUserCircle className="controls-option-icon" />
                <div className="controls-option-txt">Personal Page</div>
              </Link>
              <div className="expand-controls-option">
                <BiBookmark className="controls-option-icon" />
                <div className="controls-option-txt">Saved</div>
              </div>
              <div className="expand-controls-option">
                <RiSettings4Line className="controls-option-icon" />
                <div className="controls-option-txt">Setting</div>
              </div>
              <div className="expand-controls-option">
                <BiRefresh className="controls-option-icon" />
                <div className="controls-option-txt">Account Transfer</div>
              </div>

              <div className="expand-controls-option logOut-user">Log out</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="expand-controls-user">
        <div className="expand-controls-option">Personal Page</div>
        <div className="expand-controls-option">Saved</div>
        <div className="expand-controls-option">Setting</div>
        <div className="expand-controls-option">Account Transfer</div>
        <div className="expand-controls-option">Log out</div>
      </div> */}
      <div
        className={
          expandControl
            ? "cursor--overlay-show-control overlay-actived"
            : "cursor--overlay-show-control"
        }
        onClick={() => setExpandControl(false)}
      ></div>
    </div>
  );
};

export default Nav;
