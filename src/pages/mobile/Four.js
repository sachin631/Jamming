import React from "react";
import Footer from "../../copmponents/mobile/Footer";
// import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Four = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1200 });
  // }, []);
  return (
    <>
      <section style={{ fontFamily: "sans-serif" }} className="bg-black h-[100vh]">
        <NavLink to="/two">
          <figure className="pt-[17px] pb-0 ml-[37px]">
            <img src="/images/back.svg" alt="data" />
          </figure>
        </NavLink>
        <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-[10px] ">
          <div className="flex flex-col justify-center items-center gap-[16px]">
            <img src="./images/rectangle (2).svg" alt="data" />
            <img src="./images/rectangle.svg" alt="data" />
          </div>
          {/* middle part start*/}
          <section
            className=" data "
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
          >
            <div className="w-[85vw] h-[285px] flex flex-col text-white justify-center items-center gap-[24px] pt-[20px] mb-10 md:mb-36">
              <div className="mt-[32px] text-[#FFFFFF] flex font-[800] gap-0 leading-[18px] text-[20px] ">
                choose
              </div>
              <div>I’m here to </div>
              <div className="flex justify-center items-center gap-[48px]">
                
                  <button className="bg-[#FFC701] rounded-[5px] leading-[18px] text-[12px] text-[#000000] w-[100px] h-[30px]">
                  Sing
                  </button>
               
                <NavLink to="/play">
                  <button className="bg-[#FFC701] rounded-[5px] leading-[18px] text-[12px] text-[#000000] w-[100px] h-[30px]">
                  Play Instrument
                  </button>
                </NavLink>
              </div>
              <div>
                <button className="bg-[#FFC701] rounded-[5px] h-[30px] w-[100px] text-[#000000] mt-[24p]">start</button>
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

export default Four;
