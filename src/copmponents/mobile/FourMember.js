import React from "react";

const FourMember = () => {
  return (
    <div className="text-white md:hidden max-w-[400px] ">
      <div className="grid grid-cols-12 min-w-[100vw]">
        <div className="col-span-6">
          <div className="flex justify-center items-center mt-[14px]">
            <div className=" relative w-[100%] max-w-[296px]">
              <div className="absolute top-0 left-5 rounded-tl-[14px] rounded-br-[14px] w-[98px] h-[28px] bg-[#FFC701] flex justify-center items-center gap-[10px]">
                (Host) <img src="/images/king.svg.svg" alt="king.svg" />
              </div>
              <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                  You
                </div>
              </h1>
              <div className="flex justify-center items-center ">
                <img src="/images/host2.svg" className="w-[163px]" alt="one member" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
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
                  className="h-[211px w-[163px]"
                  alt="one member"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex justify-center items-center mt-[14px]">
            <div className=" relative w-[100%] max-w-[296px]">
              <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                  Sammy
                </div>
              </h1>
              <div className="flex justify-center items-center ">
                <img src="/images/sammy.svg" className="w-[163px]" alt="one member" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex justify-center items-center mt-[14px]">
            <div className=" relative w-[100%] max-w-[296px]">
              <h1 className="absolute bottom-5 right-8 w-[48px] h-[25px] my-[] bg-[#000000] flex justify-center items-center">
                <div className=" text-center rounded-md text-[#FFFFFF] leading-[15px] text-[12px] font-[600] font-[Montserrat]">
                  Stacy
                </div>
              </h1>
              <div className="flex justify-center items-center ">
                <img src="/images/stacy.svg" className="w-[163px]" alt="one member" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourMember;
