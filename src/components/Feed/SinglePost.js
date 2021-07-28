import React, { useState, useEffect } from "react";

import User1 from "../../img/user1.jpg";
import Post1 from "../../img/p1.jpg";
import Post2 from "../../img/p2.jpg";
import Post3 from "../../img/p3.jpg";
import Post4 from "../../img/p4.jpg";
import { BsThreeDots } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { VscHeart, VscBookmark } from "react-icons/vsc";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
const SinglePost = () => {
  const [translateX, setTranslateX] = useState(0);
  const [silde, setSlide] = useState(1);
  const imgSlide = [
    { id: 1, link: Post1 },
    { id: 2, link: Post2 },
    { id: 3, link: User1 },
    { id: 4, link: Post3 },
    { id: 5, link: Post4 },
  ];

  useEffect(() => {
    const setArraySlide = () => {
      let setLength = 0;
      switch (imgSlide.length) {
        case 1:
          return setTranslateX(setLength);
        case imgSlide.length:
          return setTranslateX((imgSlide.length - 1) * 50);
        default:
          return setTranslateX(setLength);
      }
    };
    setArraySlide();
  }, [imgSlide.length]);
  console.log(imgSlide.length);
  const runSlide = (option) => {
    if (option === "prev") {
      setSlide((prev) => (prev - 1 <= 0 ? 1 : prev - 1));
      setTranslateX(translateX + 100);
      return;
    }
    if (option === "next") {
      setSlide((prev) =>
        prev + 1 >= imgSlide.length ? imgSlide.length : prev + 1
      );
      setTranslateX(translateX + -100);
      return;
    }
  };

  console.log(silde);
  return (
    <div className="user--single-post-play">
      <section className="--single-post-header">
        <div className="--single-post-left-side">
          <div className="user-story-border-linear-v2">
            <div className="wrap-img-user-story-v2">
              <img src={User1} alt="UserFeed" />
            </div>
          </div>
          <div className="user-name-spost">Join Celena</div>
        </div>
        <div className="full-control-three-dot">
          <BsThreeDots />
        </div>
      </section>
      <section className="--single-post-image">
        <div
          style={{ display: silde === 1 ? "none" : "flex" }}
          className="user-control-slide-left"
          onClick={() => runSlide("prev")}
        >
          <HiChevronLeft className="icon-slide-control" />
        </div>
        <div
          style={{ display: silde >= imgSlide.length ? "none" : "flex" }}
          className="user-control-slide-right"
          onClick={() => runSlide("next")}
        >
          <HiChevronRight className="icon-slide-control" />
        </div>
        <div
          className="--single-post-image-wrapper"
          style={{ transform: "translateX(" + translateX + "%)" }}
        >
          {imgSlide.map((img) => {
            return (
              <img
                key={img.id}
                src={img.link}
                alt={img.link + "instagram clone"}
              />
            );
          })}
        </div>
      </section>
      <section className="user__control--live">
        <div className="control--live-ls">
          <VscHeart className="--live-ls-single-icon mr-l-10" />
          <FiMessageCircle className="--live-ls-single-icon mr-l-10" />
          <IoPaperPlaneOutline className="--live-ls-single-icon mr-l-10" />
        </div>
        <div className="control--live-rs">
          <VscBookmark className="--live-ls-single-icon" />
        </div>
      </section>
      <div className="control--live-likeCount">560.153 likes</div>
      <div className="control--live-userNote">
        Join Celena{" "}
        <span className="live--userNote-noweight">
          Hello world,see some pieces of me !!!
        </span>
      </div>
      <div className="control--live-seeComment">See all 26 comments</div>
      <div className="control--live-userNote">
        Bill Gate <span className="live--userNote-noweight">That great!!!</span>
      </div>
      <div className="control--live-userNote">
        Marick Jona{" "}
        <span className="live--userNote-noweight">
          Beautifully,keep it up 😍
        </span>
      </div>
      <div className="control--live-seeTime">8 HOURS AGO</div>
      <form className="user__comment-action">
        <input
          type="text"
          className="__comment-action"
          placeholder="Add comment..."
        />
        <input className="__comment-action-submit" type="submit" value="Post" />
      </form>
    </div>
  );
};

export default SinglePost;
