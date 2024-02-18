import React from 'react'
import { TiTick } from "react-icons/ti";

const Order = () => {
  return (
    <div className=''>
      <div className="w-full h-screen  bg-[#F9F9F9] flex items-center justify-center ">
        <div className="w-[500px] h-[600px]  ">
          <div className="flex flex-col items-center">
            <div className="">
              <div className="w-40  shadow-lg h-40 mx-auto rounded-full bg-slate-200 flex items-center justify-center">
                <div className="w-28  h-28  shadow-md rounded-full bg-lime-600 flex items-center justify-center"><TiTick className='text-white ' size={80}/></div>
              </div>
            </div>
            <div className="mt-16 font-bold text-2xl">Purchased Successfully</div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order