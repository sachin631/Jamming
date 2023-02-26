import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbRoad } from "react-icons/tb";
const DeskFooter = () => {
  const [data, setData] = useState(120);
  const [mike, setMike] = useState(false);
  const [video, setVideo] = useState(false);
  const [mikeMenu, setMikeMenu] = useState(false);
  const [videoMenu, setVideoMenu] = useState(false);
  const [speaker,setSpeaker]=useState(false);
  const [bar, setBar] = useState(0);
  const navigate = useNavigate();
  const mikeRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!mikeRef.current.contains(event.target)) {
        setMikeMenu(false);
      }
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    };

    document.addEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!videoRef.current.contains(event.target)) {
        setVideoMenu(false);
      }
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex justify-center items-centera bg-slae-900 bg-[#21242B]">
      <section className="text-white pl-[auto] pr-[auto]  pb-2 mt-3   w-[90vw]   mr-[8%]  ml-[7%]">
        <div>
          <div className="flex justify-center gap-[22%] items-center">
            <div className="flex justify-start items-center gap-[3%]">
              {/* fisrts */}

              <div>
                <div className=" flex justify-center items-center h-[50px]  border-[#747EAA] border-[1px] border-[solid] rounded-[8px]">
                  <button className="py-[17px] px-[20px] hover:bg-yellow-400 active:bg-yellow-200 justify-center rounded items-center border-r-[1px]">
                    {/* <figure> <img src="/images/track.svg" /></figure> */}
                    <TbRoad />
                  </button>
                  <button
                    className="py-[4.5px] px-[20px] hover:bg-slate-400 active:bg-slate-200 border-r-[1px]"
                    onClick={() => {
                      if (bar < 7) {
                        setBar(bar + 1);
                      } else {
                        setBar(0);
                      }
                    }}
                  >
                    <div className="text-[#515B85] leading-[20px] text-[16px] font-[400] font-[Open Sans]">
                      00<span className="text-white">{bar}</span>
                    </div>
                    <div className="text-[#747EAA] leading-[19px] text-[13px] font-[400] font-[Open Sans]">
                      Bar
                    </div>
                  </button>
                  <button className="py-[4.5px] px-[20px] hover:bg-slate-400 active:bg-slate-200 border-r-[1px]">
                    <div className="text-white leading-[20px] text-[16px] font-[400] font-[Open Sans]">
                      1
                    </div>
                    <div className="text-[#747EAA] leading-[19px] text-[13px] font-[400] font-[Open Sans]">
                      Beat
                    </div>
                  </button>

                  <button className="py-[4.5px] px-[22px] hover:bg-slate-400 active:bg-slate-200 border-r-[1px]">
                    <div className="text-white leading-[16px] text-[16px] font-[400] font-[Open Sans] flex justify-center items-center gap-2">
                      <button
                        onClick={() => {
                          setData(data - 1);
                        }}
                      >
                        -
                      </button>
                      <div className="w-[24px]">{data}</div>
                      <button
                        onClick={() => {
                          setData(data + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="text-[#747EAA] leading-[19px] text-[12px] mt-1 font-[400] font-[Open Sans]">
                      Tempo
                    </div>
                  </button>
                  <button className="py-[4.5px] rounded px-[20px] hover:bg-slate-400 active:bg-slate-200">
                    <div className="text-white leading-[20px] text-[17px] font-[400] font-[Open Sans]">
                      4/4
                    </div>
                    <div className="text-[#747EAA] leading-[19px] text-[13px] font-[400] font-[Open Sans]">
                      Cmaj
                    </div>
                  </button>
                </div>
              </div>
              {/* stop start */}
              <button className="active: active:bg-slate-400 rounded-3xl">
                {/* <img src="/images/deskstop.svg" alt="data" className="h-[1%] w-[50px]"/> */}
                <div>
                  <div className="w-[42px] h-[42px] rounded-full bg-whit border-white border-[3px] flex justify-center items-center px-2 py-2">
                    <div className="w-[28px] h-[25px] rounded-full bg-red-500"></div>
                  </div>
                </div>
              </button>
              {/* end stop button */}
            </div>
            <div className="flex justify-center items-center gap-[25px]">
              <div>
                <button
                  className="bg-[#DC354B] font-[600] text-[14px] leading-[21px] rounded-[8px] w-[120px] h-[45px] text-[#FFFFFF] font-[Montserrat] "
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  End Jam
                </button>
              </div>
              {/* modal first start */}
              {mikeMenu && (
                <div
                  ref={mikeRef}
                  className="border-[1px] border-solid border-[#747EAA] flex flex-col gap-2 justify-center items-center absolute bottom-[12%] mr-[21%] w-[244px] h-[140px] bg-[#21242B] rounded rounded-br-[20px] font-[Inter]"
                >
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFC701]">
                    Default- Analogue 1 + 2 (Foc...
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    Communications - Micropho...
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    Stereo Mix (Realtek Audio)
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    Analogue 1 + 2 (Focusrite US...
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    Microphone (Realtek Audio)
                  </div>
                </div>
              )}
              {/* modal first end */}
              {/* modal second start */}
              {videoMenu && (
                <div
                  ref={videoRef}
                  className="border-[1px] border-solid border-[#747EAA] flex flex-col gap-2 justify-center items-center absolute bottom-[12%] mr-[8%] w-[244px] h-[89px] bg-[#21242B] rounded rounded-br-[20px] font-[Inter]"
                >
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFC701]">
                    FaceTime HD Camera ( Built...
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    External Device ( Camera )
                  </div>
                  <div className="font-[Inter] font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">
                    Video Settings...
                  </div>
                </div>
              )}
              {/* modal second end  */}
              <div className="relative border-[1px] border-[solid] border-[#747EAA] rounded-[8px] w-[63px] h-[40px] flex justify-center items-center">
                <div>
                  <button
                    onClick={() => {
                      setMike(!mike);
                    }}
                  >
                    <img src="/images/deskmike.svg" className="mt-2" />
                  </button>
                  {mike && (
                    <img
                      src="/images/crossline.svg"
                      className="absolute top-2 left-4"
                      onClick={() => {
                        setMike(!mike);
                      }}
                    />
                  )}
                  <button
                    className="absolute right-0 top-0 rotate-[90deg]"
                    onClick={() => {
                      setMikeMenu(!mikeMenu);
                      setVideoMenu(false);
                    }}
                  >
                    ...
                  </button>
                </div>
              </div>
              <div className="relative border-[1px] border-[solid] border-[#747EAA] rounded-[8px] w-[63px] h-[40px] flex justify-center items-center">
                <div>
                  <button
                    onClick={() => {
                      setVideo(!video);
                    }}
                  >
                    <img src="/images/deskvideo2.svg" className="mt-2" />
                  </button>
                  {video && (
                    <img
                      src="/images/crossline.svg"
                      className="absolute top-2 left-4"
                      onClick={() => {
                        setVideo(!video);
                      }}
                    />
                  )}
                  <button
                    className="absolute right-0 top-0 rotate-[90deg]"
                    onClick={() => {
                      setVideoMenu(!videoMenu);
                      setMikeMenu(false);
                    }}
                  >
                    ...
                  </button>
                </div>
              </div>
              <button className="relative border-[1px] border-[solid] border-[#747EAA] active:bg-slate-400 rounded-[8px] w-[63px] h-[40px] flex justify-center items-center" onClick={()=>{
                setSpeaker(!speaker)
              }}>
                <img src="/images/deskspeak.svg"  />
                <img src="/images/crossline.svg" className={`${speaker?"absolute top-2 left-4":"hidden"}`}/>
              </button>
              <button className=" border-[1px] border-[solid] border-[#747EAA] active:bg-slate-400 rounded-[8px] w-[43px] h-[40px] flex justify-center items-center">
                <img src="/images/deskmenu2.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeskFooter;
