import React from "react";

const HomePageProducts = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 border">
      <div className="h-[869px] w-full">
        <div className="  flex items-center justify-between p-4">
          <div className="font-bold text-2xl">Products</div>
          <div className="font-bold text-sm">View All Products</div>
        </div>
        <hr />
        <div className="hidden md:block">
          <div className="border flex">
            <div className="bg-white p-4 w-[454px] h-[754px] mr-3">
              <div className="border h-[50%]">
                <img src="https://s3-alpha-sig.figma.com/img/054b/b5af/fb4c15d6c8e92034193e188cfbde0b22?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ceVvzXv8WwYXWi-pFGidK~T0NWOycikA7tz6A4AUdsILKfKns29D9GnB4DzZTCcrfHCcM6i0Nvh2OHT8CnIQ-CbrI6RVmDbKn43in2MwY1EebV9B~dvbjOiWeQb3Ordn-Jf3Kolegi-Ss3BbMR11Qs58y-qK75QoLsPtAIQDjAOd-QXGlZBl~MfaUS7hvd3~ohnc509lsyFSSuo5b28LevC2jQX2UD~PLLFZIpQSHa9Wn~0QV5UNmsSLMSHwVtOzLCxOSUGZl4BMzb2MoQZ332zWd1CLOK~5OOjGjBQwwHtntRQxXRb-fjbYgvil3Qv~gQwkyMJ1LDeaJ6z7fsWT0Q__" alt="" />
              </div>
              <div className="border h-[50%] flex flex-col items-center">
                <div className="text-[#1AA5C3] text-xs mt-16 font-bold">AUDIO AMPLIFIER, HDMI PROJECTORS</div>
                <span className=" font-bold text-center mt-5">iPhone 14 Pro max 256GB - Deep Purple..</span>
                <span className="font-bold mt-5">4,699.00</span>
                <button className="p-4 bg-[#1AA5C3] px-9 mt-5 text-white"> Add To Cart</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full border">
              <div className="bg-green-500 p-4 border ">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>
              <div className="bg-green-500 p-4 border">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>
              <div className="bg-green-500 p-4 border">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>

              <div className="bg-green-500 p-4 border">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>
              <div className="bg-green-500 p-4 border">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>
              <div className="bg-green-500 p-4 border">
                <div className="border h-[70%]"></div>
                <div className="border h-[30%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
