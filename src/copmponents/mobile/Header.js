import React, { useState } from 'react'

const Header = ({stateData}) => {
    const [invite,setInvite]=useState(true);
    const [barData,setBarData]=useState(1);
    const [incDec,setIncDec]=useState(120);
    // const stateData=(invite,setInvite)=>{
    //         setInvite(!invite);
    // }
  return (
   <>
    <section className='pt-[28px]  py-2 ml-[24px] mr-[24px] text-white md:hidden'>
        <div className='py-1 flex justify-between container pl-[24px] pr-[24px]  border-[#FFC701] border-solid rounded-[8px] border-[1px]'>
            <div className='flex  justify-center items-center gap-2'>
                <img src="/images/track.svg" alt="track" className='active:scale-150 '/>
                <button className='flex flex-col justify-center items-center' onClick={()=>{
                    if(barData<7){
                        setBarData(barData+1);
                    }
                    else{
                        setBarData(1)
                    }
                }}>
                    <div className='text-[#FFC701] text-[12px] leading-[20px] font-[400]'>000<span className='text-white'>{barData}</span></div>
                    <div  className='text-[#FFC701] text-[12px] leading-[20px] font-[400]'>Bar</div>
                </button>
                <div className='flex flex-col justify-center items-center active:scale-110'>
                    <div  className='text-[12px] leading-[20px] font-[400]'>1</div>
                    <div  className='text-[#FFC701] text-[12px] leading-[20px] font-[400]'>Beat</div>
                </div>
                <div className='flex flex-col justify-center items-center w-[40px]'>
                    <div className='flex gap-2  text-[12px] leading-[20px] font-[400]'><button onClick={()=>{
                        setIncDec(incDec-1)
                    }}>-</button >{incDec}<button onClick={()=>{
                        setIncDec(incDec+1);
                    }}>+</button></div>
                    <div  className='text-[#FFC701] text-[12px] leading-[20px] font-[400]'>Tempo</div>
                </div>
                <div className='flex flex-col justify-center items-center active:scale-110'>
                    <div className='text-[12px] leading-[20px] font-[400]'>4/4 </div>
                    <div  className='text-[#FFC701] text-[12px] leading-[20px] font-[400]'>Cmaj</div>
                </div>
            </div>
            <div className='flex justify-center items-center active:scale-110'>
                <img src="/images/plusbutton.svg" alt="plus" onClick={()=>{stateData(invite,setInvite)}} className=""/>
            </div>
        </div>
        <div className='flex justify-start items-center pl-[26px] mt-[14px] gap-[24px]'>
            <img src="images/humburger.svg" alt="humburger" className='active:scale-110'/>
            <img src="images/videoicon.svg" alt="humburger" className='active:scale-110'/>

        </div>
    </section>
   </>
  )
}

export default Header