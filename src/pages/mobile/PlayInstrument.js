import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from "react-router-dom";

const PlayInstrument = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <section
        style={{ fontFamily: "sans-serif" }}
        className="min-h-[100vh] h-[100%] bg-black"
      >
        <NavLink to="/four">
          <figure className="pt-[17px] pb-4 ml-[37px] ]">
            <img src="/images/back.svg" alt="data" className="" />
          </figure>
        </NavLink>
        <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-[80px]  ">
          <div
            className="flex flex-col justify-center items-center pt-[16px] "
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <img src="./images/music.svg" alt="data" className="" />
          </div>
          {/* middle part start*/}
          <section
            className=" data mt-[5vh] h-[360px]"
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
          >
            <div className="w-[85vw] h-[275px] flex flex-col text-white justify-center items-center gap-[32px] pt-[32px]">
              <div className="mt-[32px] text-[#FFFFFF] leading-[18px] flex font-[600]  text-[20px]">
                Select your instrument
              </div>
              {/* dropDown start*/}
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  navigate("/dropinstru");
                }}
              >
                <div className="flex justify-between items-center w-[250px]">
                  <div>Instrument</div>
                  <img src="/images/dropdown.svg" alt="data" />
                </div>
                <div>
                  <hr className="w-[250px] border-[1px] " />
                </div>
              </div>
              {/* dropdown end */}
              <div></div>
              <div className="flex justify-center items-center gap-[48px]">
                <button className="text-[#BDBDBD] leading-[17px] text-[14px] font-[500] bg-[#DFDFDF] rounded-[9px] w-[150px] h-[40px]">
                  Next
                </button>
              </div>
            </div>
          </section>
          {/* middle part end*/}
        </div>
      </section>
    </>
  );
};

export default PlayInstrument;
