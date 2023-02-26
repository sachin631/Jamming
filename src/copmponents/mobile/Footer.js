import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="absolut mt-auto  bottom-0">
            <profile className="flex justify-center ">
              <img src="./images/cross.svg" alt="studio " className='active:scale-105' />
            </profile>
            <div className="w-[100vw] md:w-[98.5vw] flex justify-between mt-[-13px]">
              <div className="bg-[#333333] py-2 w-[50vw] border border-[#333333] rounded-tr-[45px] rounded--[200px]">
                <figure className="flex justify-around ">
                  <button className="flex flex-col justify-center items-center active:scale-105">
                    <img src="./images/home.svg" alt="studio " />
                    <h1 className="text-[#FFFFFF] leading-[18px] font-[400] mt-1">Studio</h1>
                  </button>
                  <button className="flex flex-col justify-center items-center mr-4 active:scale-105">
                    <img src="./images/group.svg" alt="studio " />
                    <h1 className="text-[#FFFFFF] leading-[18px] font-[400] mt-1">Musicians</h1>
                  </button>
                </figure>
              </div>
              <div className="bg-[#333333] py-2 w-[50vw]  border border-[#333333] rounded-tl-[45px] rounded--[200px]">
                <figure className="flex justify-around ">
                  <button className="flex flex-col justify-center items-center ml-4 active:scale-105">
                    <img src="./images/sessions.svg" alt="studio" />
                    <h1 className="text-[#FFFFFF] leading-[18px] font-[400] mt-1">Sessions</h1>
                  </button>
                  <button className="flex flex-col justify-center items-center active:scale-105 ">
                    <img src="./images/profile.svg" alt="studio" />
                    <h1 className="text-[#FFFFFF] leading-[18px] font-[400] mt-1">Profile</h1>
                  </button>
                </figure>
              </div>
            </div>
          </section>
    </>
  )
}

export default Footer