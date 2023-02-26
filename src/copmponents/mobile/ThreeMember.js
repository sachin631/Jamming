import React from "react";

const ThreeMember = () => {
  return (
    <>
      <div className="max-w-[700px] flex justify-center items-center">
        <div className="grid cols-12 text-white md:hidden ">
          <div className="grid col-span-12">
            <div className="flex justify-center items-center mt-[14px]">
              <div className=" relative w-[100%] max-w-[296px]">
                <div className="absolute top-0 left-0 rounded-br-[14px] w-[98px] h-[28px] bg-[#FFC701] flex justify-center items-center gap-[10px]">
                  (Host) <img src="/images/king.svg.svg" alt="king.svg" />
                </div>
                <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                  <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                    You
                  </div>
                </h1>
                <div className="flex justify-center items-center ">
                  <img src="/images/host.svg" className="" alt="one member" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-6">
            <div className="flex justify-center items-center mt-[14px]">
              <div className=" relative w-[100%] max-w-[296px]">
                <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                  <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                    Erica
                  </div>
                </h1>
                <div className="flex justify-center items-center ">
                  <img
                    src="/images/erica2.svg"
                    className="h-[211px]"
                    alt="one member"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-6">
            <div className="flex justify-center items-center mt-[14px]">
              <div className=" relative w-[100%] max-w-[296px]">
                <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                  <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                    Sammy
                  </div>
                </h1>
                <div className="flex justify-center items-center ">
                  <img src="/images/sammy.svg" className="" alt="one member" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeMember;
