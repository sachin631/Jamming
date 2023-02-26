import React from "react";

const ThirdScreen = () => {
  return (
    <>
      <section className="-10">
        <div className="grid grid-cols-2 gap-3 ">
          <div className="b-blue-500 bg-black rounded-xl mx-auto my-auto relative">
            <figure className="rounded-lg w-[570px] h-[440px] flex justify-center items-center ">
              <video
                autoplay={"autoplay"}
                loop
                width=""
                height=""
                className="w-full h-full rounded-md"
              >
                <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
              </video>
            </figure>
            <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

          </div>
          <div className="flex flex-col gap-3 ">
            <div className="rounded-xl w-[570px] mx-auto bg-black my-auto relative">
              <video
                autoplay={"autoplay"}
                loop
                width=""
                height=""
                // controls
                className="rounded-md w-[1600px] h-[215px]"
              >
                <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
            <div className="rounded-xl mx-auto w-[570px] bg-black my-auto relative">
              <video
                autoplay={"autoplay"}
                loop
                width=""
                height=""
                // controls
                className="rounded-md w-[1600px] h-[215px]"
              >
                <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdScreen;
