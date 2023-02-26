import React from "react";

const FourthScreen = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-2  space-x-8 pr-[110px] ml-16">
          <div className="w-[102%] max-h-[630px] rounded-[20px] text-white bg-blac flex flex-col gap-3">
            <div className="w-[102%] max-h-[315px] bg-black relative">
              {/* <img src="/images/ericarectangle.svg" /> */}
              <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md w-[1600px] h-[210px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
            <div className="w-[102%] max-h-[315px] bg-black relative">
              {/* <img src="/images/leorectangle.svg" /> */}
              <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md w-[1600px] h-[210px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
          </div>
          <div className="w-[101%] max-h-[630px] rounded-[20px] text-white bg-blac flex flex-col gap-3">
            <div className="w-[100%] max-h-[315px] bg-black relative">
              {/* <img src="/images/ericarectangle.svg" /> */}
              <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md w-[1600px] h-[210px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
            <div className="w-[100%] max-h-[315px] bg-black relative">
              {/* <img src="/images/leorectangle.svg" /> */}
              <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md w-[1600px] h-[210px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
          </div>
        </div>
        {/* right */}
        
      </section>
    </>
  );
};

export default FourthScreen;
