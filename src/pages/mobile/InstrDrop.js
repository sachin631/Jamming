import React from "react";
import { NavLink } from "react-router-dom";

const InstrDrop = () => {
  return (
    <>
      <section className="bg-black">
        <div>
          <NavLink to="/play">
            <figure className="pt-[17px] pb-4 ml-[37px] ]">
              <img src="/images/back.svg" alt="data" className="" />
            </figure>
          </NavLink>
          <div className="flex justify-center items-center mt-[7px]">
            <div className=" bg-slate-500 data rounded-t-xl w-[90%] h-[600px] min-h-[86vh]">
              <div className="text-center mt-[40px] text-[#FFFFFF]">
                Select your instrument
              </div>
              <div>
                <div className="flex flex-col justify-center items-center mt-[38px]">
                  <div className="flex justify-between items-center w-[250px]">
                    <div className="text-[#FFFFFF]">Instrument</div>
                    <img src="/images/dropup.svg" alt="data" />
                  </div>
                  <div>
                    <hr className="w-[250px] border-[1px] " />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-[3px] mt-[4px] h-[305px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100  ">
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  DAW
                </div>
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  Keyboard
                </div>
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  Guitar
                </div>
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  Violin
                </div>
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  Banjo
                </div>
                <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                  Piano
                </div>
                <NavLink to="/drum420">
                  {" "}
                  <div className="w-[236px] h-[40px] bg-[#322F3B] rounded-[5px] flex justify-center items-center text-[14px] font-[500] leading-[38px] text-[#FFFFFF] ">
                    Drums
                  </div>
                </NavLink>
              </div>
              <div className="flex justify-center items-center gap-[48px] mt-[34px]">
                <button className="text-[#BDBDBD] leading-[17px] text-[14px] font-[500] bg-[#DFDFDF] rounded-[9px] w-[150px] h-[40px]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstrDrop;
