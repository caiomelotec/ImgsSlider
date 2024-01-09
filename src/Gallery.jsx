import { useRef, useState, useEffect } from "react";
import slider1 from "./imgs/slide-1.jpg";
import slider2 from "./imgs/slide-2.jpg";
import slider3 from "./imgs/slide-3.jpg";
import slider4 from "./imgs/slide-4.jpg";
import slider5 from "./imgs/slide-5.jpg";
import slider6 from "./imgs/slide-6.jpg";
import slider7 from "./imgs/slide-7.jpg";

import React from "react";

export const Gallery = () => {
  const scrollContainerRef = useRef(null);
  const [toggleNextBtn, setToggleNextBtn] = useState(true);
  const [togglePrevtBtn, setTogglePrevBtn] = useState(true);

  const handleWheel = (e) => {
    scrollContainerRef.current.scrollLeft += e.deltaY;
  };

  const handleNextClick = () => {
    scrollContainerRef.current.style.scrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft += 300;
  };

  const handlePrevClick = () => {
    scrollContainerRef.current.stylescrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft -= 300;
  };

  useEffect(() => {
    // let scrollPosition = scrollContainerRef.current.scrollLeft;
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollLeft === 0) {
        setTogglePrevBtn(true);
      } else if (scrollContainerRef.current.scrollLeft >= 1760) {
        setToggleNextBtn(false);
      } else {
        setTogglePrevBtn(false);
        setToggleNextBtn(true);
      }
    };

    // add event listner for scroll
    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    // clean up the event listner on component unmount
    return () => {
      scrollContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gallery-wrap">
      <button
        onClick={handlePrevClick}
        id="backBtn"
        style={{ display: togglePrevtBtn ? "none" : "" }}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <div
        // style={{ width: "1600px" }}
        className="gallery"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        <span>
          <img src={slider1} alt="" />
        </span>
        <span>
          <img src={slider2} alt="" />
        </span>
        <span>
          <img src={slider3} alt="" />
        </span>

        <span>
          <img src={slider4} alt="" />
        </span>
        <span>
          <img src={slider5} alt="" />
        </span>
        <span>
          <img src={slider6} alt="" />
        </span>

        <span>
          <img src={slider7} alt="" />
        </span>
        <span>
          <img src={slider1} alt="" />
        </span>
        <span>
          <img src={slider5} alt="" />
        </span>
      </div>

      <button
        onClick={handleNextClick}
        id="nextBtn"
        style={{ display: toggleNextBtn ? "" : "none" }}
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
};
