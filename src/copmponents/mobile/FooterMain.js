import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FooterMain = () => {
  const [showmike, setShowMike] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  return (
    <section className=" mt-[16px] text-white mx-[24px] md:hidden">
      <div>
        <div className="footermain flex justify-between items-center ">
          <div className="flex justify-between items-center gap-[16px]">
            <button
              className="relative"
              onClick={() => {
                setShowMike(!showmike);
              }}
            >
              <img
                src="/images/crossline.svg"
                alt="data"
                className={`${
                  showmike ? "w-[15px] absolute bottom-2 left-2" : "hidden"
                }`}
              />
              <img src="/images/mike.svg" />
            </button>
            <button
              className="relative"
              onClick={() => {
                setShowVideo(!showVideo);
              }}
            >
              <img
                src="/images/crossline.svg"
                alt="data"
                className={`${
                  showVideo ? "w-[15px] absolute bottom-2 left-2" : "hidden"
                }`}
              />
              <img src="/images/videomike.svg" />
            </button>
            <button onClick={()=>{
              setSpeaker(!speaker)
            }} className="relative">
            <img
                src="/images/crossline.svg"
                alt="data"
                className={`${
                  speaker ? "w-[15px] absolute bottom-2 left-2" : "hidden"
                }`}
              />
              <img src="/images/speaker.svg" />
            </button>
            <img src="/images/menu.svg" className="active:scale-110" />
            <img src="/images/stop.svg" className="active:scale-110" />
          </div>
          <div>
            <NavLink to="/">
              <button className="bg-[#DC354B] w-[90px] h-[30px] rounded-[8px] font-[600] text-[14px] leading-[14px] text-[#FFFFFF]">
                End Jam
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMain;
