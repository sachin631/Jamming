import React from "react";
import {GiHamburgerMenu} from "react-icons/gi"

const Sidebar = () => {
  return (
    <>
      <section>
        {/* sidebar start */}
        <div className="bg-gary-900 w-[9%] min-h-[60vh]">
          <div>
            <div className="flex flex-col justify-center items-start gap-[22px]">
              <div className=" flex  justify-start items-center gap-[20px] ">
                <img src="/images/Rectangle 22.svg" alt="videocam" />
                <img src="/images/deskvideo.svg" alt="videocam" className="active:scale-150"/>
              </div>
              {/* <img src="/images/humburger.svg" alt="videocam" className="ml-[24px] w-full h-full"/> */}
              <GiHamburgerMenu className="text-white ml-[24px] active:scale-150" />
            </div>
          </div>
        </div>
          {/* sidebar end */}
      </section>
    </>
  );
};

export default Sidebar;
