import React from "react";

const SecondScreen = () => {
  return (
    <>
      <section className="w-[50v]">
        <div className="grid grid-cols-2 space-x-9 pr-[10%]">
          <div className="w-[570px]  max-h-[80vh] rounded-[20px] text-white bg-black relative">
            {/* <img src="/images/disk2host.svg"/> */}
            <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md  h-[440px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">
              Sachin Sangwan
            </div>
          </div>
          <div className="w-[570px]  max-h-[70vh] rounded-[20px] text-white bg-black relative">
            {/* <img src="/images/deskerica2.svg" /> */}
            <video
              autoplay={"autoplay"}
              loop
              width=""
              height=""
              // controls
              className="rounded-md w-[1600px h-[440px]"
            >
              <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">
              Sachin Sangwan
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondScreen;
