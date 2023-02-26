import React from "react";
import DeskNav from "../desktop/DeskNav";
import FirstScreen from "../desktop/FirstScreen";
import Sidebar from "../desktop/Sidebar";

const OneMember = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[14px] md:hidden">
        <div className=" relative w-[100%] max-w-[296px]">
          <div className="absolute top-0 left-0 rounded-br-[14px] w-[98px] h-[28px] bg-[#FFC701] flex justify-center items-center gap-[10px]">
            (Host) <img src="/images/king.svg.svg" alt="king.svg" />
          </div>
          <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
            <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
              You
            </div>
          </h1>
          <img src="/images/onemember.svg" alt="one member" />
        </div>
      </div>
      {/* responsivness on one member */}
      <div className="md:block hidden">
        {/* <div>
          <DeskNav />
        </div> */}
        {/* <div>
          <Sidebar/>
        </div> */}
        {/* <div>
          <FirstScreen/>
        </div> */}
      </div>
    </>
  );
};

export default OneMember;
