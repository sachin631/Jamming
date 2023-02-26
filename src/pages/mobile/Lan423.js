import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from "react-router-dom";

const Lan423 = () => {
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
        <NavLink to="/selectlanguage">
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
            <img src="./images/drumkit.svg" alt="data" className="" />
          </div>
          {/* middle part start*/}
          <section
            className=" data mt-[5vh] h-[360px]"
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-easing="ease-in-sine"
          >
            <div className="w-[85vw] h-[275px] flex flex-col text-white justify-center items-center gap-[32px] pt-[32px]">
              <div className="mt-[32px] text-[#FFFFFF] flex flex-col leading-[18px]  font-[600]  text-[20px]">
                Select your prefered <div className="text-center">Language</div>
              </div>
              {/* dropDown start*/}
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  navigate("/landrop");
                }}
              >
                <div className="flex justify-between items-center w-[250px]">
                  <div>English</div>
                  <img src="/images/dropdown.svg" alt="data" />
                </div>
                <div>
                  <hr className="w-[250px] border-[1px] " />
                </div>
              </div>
              {/* dropdown end */}
              <div></div>
              <div className="flex justify-center items-center gap-[48px]">
                <NavLink to="/main210">
                  {" "}
                  <button className="text-[#000000] leading-[17px] text-[14px] font-[500] bg-[#FFC701] rounded-[9px] w-[150px] h-[40px]">
                    Next
                  </button>
                </NavLink>
              </div>
            </div>
          </section>
          {/* middle part end*/}
        </div>
      </section>
    </>
  );
};

export default Lan423;
