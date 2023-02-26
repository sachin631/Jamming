import React, { useEffect } from "react";
import Footer from "../../copmponents/mobile/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from "react-router-dom";


const One410 = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  const navigate=useNavigate();
  return (
    <>
      <section
        style={{ fontFamily: "sans-serif" }}
        className=" h-[100%] md:hidden"
      >
        <div className="bg-black w-[100%] h-[100%] flex flex-col justify-center items-center gap-[80px] ">
          <div className="flex flex-col justify-center items-center pt-[16px]">
            <img src="./images/lf20_t4pg081x.json].svg" alt="data" />
            <img src="./images/rectangle.svg" alt="data" />
          </div>
          {/* middle part start*/}
          <section
            className=" data "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-[85vw] min-h-[264px]  flex flex-col text-white justify-center items-center gap-[20px] pt-[32px] mb-24">
              <div className="mt-[32px] text-[#FFFFFF] flex font-[800] gap-0 ">
                ch
                <span className="text-[#FFC701] flex flex-col justify-center items-center gap-0 font-[800] leading-5">
                  o<img src="./images/Vector 5 (Stroke).svg" alt="stroke" />
                </span>
                ira
              </div>
              <div>i would like to</div>
              <div className="flex justify-center items-center gap-[48px]">
                <NavLink to="/three">
                  <button className="bg-[#FFC701] rounded-[5px] leading-[18px] text-[12px] text-[#000000] w-[100px] h-[30px]">
                    start JAM
                  </button>
                </NavLink>
                <NavLink to="/two">
                  <button className="bg-[#FFC701] rounded-[5px] leading-[18px] text-[12px] text-[#000000] w-[100px] h-[30px]">
                    join JAM
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
      {/*desktop login  logout screen*/}
      <section className="md:block hidden bg-slate-900 w-[100%] h-[100vh] font-normal text-white">
        <div className="container mx-auto py-2">
          <img src="/images/choira1.png" alt="data" className="rounded-xl w-[14%]" />
        </div>
        <div className="grid grid-cols-2 container mx-auto mt-[4%] pl-[8%]">
          <div>
            <div className="text-[28px]">
              Fast, reliable and <span className="text-yellow-600">Secure</span>
            </div>
            <div className="text-[28px]">
              <span className="text-yellow-600">Jamming</span> with Choira Jam.
            </div>
          </div>
          <form>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-4 mt-10">
              <label>
                <span className="text-red-500"> *</span> Room Name
              </label>
              <input type="text" required className="rounded py-2 text-black px-4" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-10">
              <label>
                <span className="text-red-500"> *</span> User Name
              </label>
              <input type="email" required className="rounded py-2 text-black px-4" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-10">
              <label>
                <span className="text-red-500"> *</span> Are You
              </label>
              <select className="text-black rounded px-[69px] py-2 ml-4">
                  <option>Musician</option>
                  <option>Spectator</option>
              </select>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2">
              <button className="bg-yellow-500 px-2 py-2 text-black rounded hover:bg-yellow-400" type="submit" onClick={(event)=>{
                event.preventDefault();
                navigate("/Main210")
              }}>Create/Join Room</button>
              <button className="bg-slate-500 px-2 py-2 text-black rounded hover:bg-slate-400">Reset</button>
              <button className="bg-yello-500 px-2 py-3 text-yellow-500 rounded-xl hover:text-yellow-400">Fill-Form</button>
            </div>
          </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default One410;
