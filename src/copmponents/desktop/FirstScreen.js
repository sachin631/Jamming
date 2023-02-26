import React from "react";

const FirstScreen = () => {
  return (
    <div className="text-white  w-[1150px] max-h-[630px]  bg-black mr-8 rounded-lg ml-[1] flex justify-start items-center scroll-my-3.5">
      {/* <img src="/images/@Screen (1).svg" className='w-[90vw] max-h-[630px] h-[77vh]  px-4 py-4'/> */}
      <figure className="w-[85vw] h-[450px] flex justify-center items-center overflow-hidden relative">
        <video
          muted
          autoplay={"autoplay"}
          playsinline
          loop
          // controls
          className="rounded-md w-full h-full"
        >
          <source src="/images/sachinvideodemo.mp4" type="video/mp4" />
          video data
        </video>
        <div className="absolute bottom-0 right-2 rounded-[14px]  text-white bg-[#000000] mb-1 px-6 py-1">Sachin Sangwan</div>
      </figure>
    </div>
  );
};

export default FirstScreen;
