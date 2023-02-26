import React from "react";
import Footer from "../../copmponents/mobile/Footer";
// import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Three413 = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1200 });
  // }, []);
  return (
    <>
      <section style={{ fontFamily: "sans-serif" }} className="bg-black h-[100vh]">
        <NavLink to="/">
          <figure className="pt-[17px] pb-0 ml-[37px]">
            <img src="/images/back.svg" alt="data" />
          </figure>
        </NavLink>
        <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-[5px] ">
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
            <div className="w-[85vw] h-[295px] flex flex-col text-white justify-center items-center gap-[23px] pt-[32px] mb-16 md:mb-36">
              <div className="mt-[32px] text-[#FFFFFF] flex font-[800] gap-0 ">
                ch
                <span className="text-[#FFC701] flex flex-col justify-center items-center gap-0 font-[800] leading-5">
                  o<img src="./images/Vector 5 (Stroke).svg" alt="stroke" />
                </span>
                ira
              </div>
              <div>Let’s get started</div>
              <div className="flex justify-center items-center gap-[48px]">
                <div>
                  <span className="text-[#FFC701] font-[700] text-[12px]">
                    JAM ID{" "}
                    <span className="text-[#FFFFFF] leading-[15px] font-[700] text-[12px]">
                      31551
                    </span>
                  </span>
                </div>
                <button className="text-[#1A1B20] flex justify-center items-center gap-1 bg-[#FFC701] rounded-[5px] leading-[18px] text-[12px]  w-[100px] h-[30px]">
                  <img src="/images/reply.svg" alt="data" />
                  invite
                </button>
              </div>
              <div>
                <NavLink to="/four">
                  {" "}
                  <button className="bg-[#FFC701] rounded-[5px] h-[30px] w-[100px] text-[#000000] mt-[24p]">
                    start
                  </button>
                </NavLink>
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

export default Three413;
