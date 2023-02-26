import React, { useState } from "react";
import DeskFooter from "../../copmponents/desktop/DeskFooter";
import DeskNav from "../../copmponents/desktop/DeskNav";
import FirstScreen from "../../copmponents/desktop/FirstScreen";
import FourthScreen from "../../copmponents/desktop/FourthScreen";
import SecondScreen from "../../copmponents/desktop/SecondScreen";
import Sidebar from "../../copmponents/desktop/Sidebar";
import ThirdScreen from "../../copmponents/desktop/ThirdScreen";
import FooterMain from "../../copmponents/mobile/FooterMain";
import FourMember from "../../copmponents/mobile/FourMember";
import Header from "../../copmponents/mobile/Header";
import Model390 from "../../copmponents/mobile/Model390";
import OneMember from "../../copmponents/mobile/OneMember";
import ThreeMember from "../../copmponents/mobile/ThreeMember";
import TwoMember from "../../copmponents/mobile/TwoMember";

const Main210 = () => {
  const [data, setData] = useState();
  const [increMent, setIncreMent] = useState(1);

  const stateData = (invite, setInvite) => {
    setInvite(!invite);
    console.log(invite);
    setData(invite);
  };

  return (
    <>
      <section className="bg-black min-h-[100vh] md:bg-gray-900 md:hidden">
        {/* dumy data */}
        <div className="text-white text-center flex justify-center items-center gap-4">
          <button
            className="bg-blue-500 px-3 py-3 rounded-lg"
            onClick={() => {
              if (increMent > 1) {
                setIncreMent(increMent - 1);
              }
            }}
          >
            -
          </button>
          {increMent}
          <button
            className="bg-blue-500 px-3 py-3 rounded-lg"
            onClick={() => {
              if (increMent < 4) {
                setIncreMent(increMent + 1);
              }
            }}
          >
            +
          </button>
        </div>
        {/* dumy data */}
        <Header stateData={stateData} />
        {/* data on invite button start */}
        <div
          className={`${
            data === true ? "absolute text-white z-50 w-[100%]  " : "hidden"
          }`}
        >
          <Model390 />
        </div>
        {/* data on invite button end */}
        {/* one member start */}
        <div>
          {increMent === 1 && <OneMember />}
          {increMent === 2 && <TwoMember />}
          {increMent === 3 && <ThreeMember />}
          {increMent === 4 && <FourMember />}
        </div>
        {/* one member end */}
        <FooterMain />
      </section>
      {/* responsvnes */}
      <section className="bg-gr-900 bg-[#21242B] md:block hidden min- h-[100vh] w-[100vw]">
      <div className="text-white text-center flex justify-center items-center gap-4">
          <button
            className="bg-blue-500 px-2 py0 rounded-lg"
            onClick={() => {
              if (increMent > 1) {
                setIncreMent(increMent - 1);
              }
            }}
          >
            -
          </button>
          {increMent}
          <button
            className="bg-blue-500 px-2 py-0 rounded-lg"
            onClick={() => {
              if (increMent < 4) {
                setIncreMent(increMent + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <div>
          <div>
            <DeskNav />
          </div>
          <div className="flex justify-start items-start gap-4">
            <div className="w-[9%]">
              <Sidebar />
            </div>
            <div>
             {increMent===1 && <FirstScreen /> }
             {increMent===2 && <SecondScreen/> }
             {increMent===3 && <ThirdScreen/> }
             {increMent===4 && <FourthScreen/>}
            </div>
          </div>
          <div><DeskFooter/></div>
        </div>
      </section>
    </>
  );
};

export default Main210;
