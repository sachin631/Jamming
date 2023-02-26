import React, { useEffect } from "react";
import Footer from "../../copmponents/mobile/Footer";
// import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Two414 = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1200 });
//   }, []);
  return (
    <>
      <section style={{ fontFamily: "sans-serif" }} className="bg-black h-[93vh] md:h-[98vh]">
        <NavLink to="/">
          <figure className="pt-[17px] pb-0 ml-[37px]">
            <img src="/images/back.svg" alt="data" />
          </figure>
        </NavLink>
        <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-[10px] ">
          <div className="flex flex-col justify-center items-center">
            <img src="./images/cloud.svg" alt="data" />
            <img src="./images/rectangle.svg" alt="data" />
          </div>
          {/* middle part start*/}
          <section
            className=" data "
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
          >
            <div className="w-[85vw] h-[265px] flex flex-col text-white justify-center items-center gap-[20px] pt-[32px] mb-24 md:mb-36">
              <div className="mt-[32px] text-[#FFFFFF] flex font-[800] gap-0 ">
                ch
                <span className="text-[#FFC701] flex flex-col justify-center items-center gap-0 font-[800] leading-5">
                  o<img src="./images/Vector 5 (Stroke).svg" alt="stroke" />
                </span>
                ira
              </div>
              <div>Enter your JAM ID</div>
              <div className="flex justify-center items-center gap-[48px]">
                <div>
                  <span className="text-[#FFC701] font-[700] text-[12px]">
                    JAM ID <span className="text-[#FFFFFF] text-[12px]">_ _ _ _</span>
                  </span>
                </div>
                <button className="bg-[#C4C4C4] rounded-[5px] leading-[18px] text-[12px] text-[#000000] w-[100px] h-[30px]">
                  join
                </button>
              </div>
            </div>
          </section>
          {/* middle part end*/}
          {/* footer */}

          <Footer />
        </div>
      </section>
    </>
  );
};

export default Two414;
