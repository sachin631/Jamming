import React, { useState, useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
// import choira from '../img/choira1.png'
// import Vector_plus from '../img/Vector_plus.svg'

export default function DeskNav() {
  const [invite, setInvite] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setInvite(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <nav className=" bg-gra-900 bg-[#21242B]   sm:px-4 sm:py-4 md:w-[98vw]">
        <div className="text-white  flex justify-between items-center px-[34px] ">
          <div>
            <img
              src="/images/choira1.png"
              alt="data"
              className="w-[12vw] rounded"
            />
          </div>
          <div className="text-[#FFFFFF] leading-[29px] text-[24px] font-[Montserrat] font-[200]">
            Friday Night Jam
          </div>
          <div>
            <button
              className="flex justify-center items-center w-[123px] gap-[14px] border-[#747EAA] rounded-[8px] border-solid border-[1px] h-[50px]"
              onClick={() => {
                setInvite(!invite);
              }}
            >
              <span>
                <img src="/images/Vector_plus.svg" alt="plus" />
              </span>
              <button className="text-[#F1B103] leading-[22px] text-[18px] font-[500] font-[Montserrat]">
                Invite
              </button>
            </button>
          </div>
        </div>
      </nav>
      {/* invite popup model */}
      {invite && (
        <div
          ref={ref}
          className="flex justify-center items-center  text-white absolute   z-[100]   top-[20%] left-[30%] bg-blend-overlay opacity-70"
        >
          <div className="bg-black w-[689px] h-[292px] text-white  rounded-xl">
            <div className="bg-[#1A1B20] flex justify-end px-8 items-center gap-[24%] h-[] rounded-xl">
              {/* <div className="flex justify-start items-center gap-[7px] px-[14px] py-[14px]">
                <div className="bg-red-500 rounded-full w-[12px] h-[12px]"></div>
                <div className="bg-[#C4C4C4] rounded-full w-[12px] h-[12px]"></div>
                <div className="bg-[#C4C4C4] rounded-full w-[12px] h-[12px]"></div>
              </div> */}
              <div>Invite artists to your jam session</div>
              <button
                onClick={() => {
                  setInvite(!invite);
                }}
              >
                <RxCross1 />
              </button>
            </div>
            <div>
              <div className="font-[600] font-[Montserrat] text-[16px] leading-[19.5px]  px-4 ">
                <div className="border-b-[2px] border-[#F1B103] yellow w-[10%] py-2 ">
                  Emails
                </div>
              </div>
              <hr />
            </div>
            <div>
              <p className="text-center mt-5">
                Choose your email service to send invitation
              </p>
              <div className="flex justify-center items-center mt-[25px] gap-8">
                <div className="active:scale-110">
                  <img src="/images/mail.svg" alt="data" />
                </div>
                <div className="active:scale-110">
                  <img src="/images/mailbox.svg" alt="data" />
                </div>
              </div>
              <hr className="mt-[40px]" />
            </div>
            <div className="mt-[10px] text-[#F1B103] font-[Montserrat] text-[16px] font-[600] leading-[19.5px] px-4 ">
              <div className="active:scale-105 w-fit cursor-pointer">Copy Invite Link</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
