import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

interface props {
  TabScreenData: TabsViewDataType;
}

const TabScreen = ({ TabScreenData }: props) => {
  return (
    <div className="relative py-44 bg-gradient-to-br from-blue-500/80 to-blue-950/100 hover:from-blue-800/50 hover:to-blue-900/30 duration-200 cursor-pointer transition-all">
      <div className="w-full grid grid-cols-2 max-w-7xl mx-auto  items-center p-6 rounded-b-xl min-h-[400px]">
        <Image src={TabScreenData.image} width={500} height={500} alt="W" />
        <div className="flex flex-col  items-start gap-5">
          <div className="flex flex-col start gap-5">
            <h1 className="text-3xl font-semibold text-primary-100">
              {TabScreenData.title}
            </h1>
            <p className="text-lg font-normal text-white">
              {" "}
              {TabScreenData.subTitle}
            </p>
          </div>
          <Button className="bg-ocean-blue-500 p-4 cursor-pointer">
            <p className="text-white font-medium ">{TabScreenData.ctaLabel}</p>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[200px]   transform translate-y-1 drop-shadow-[0_-25px_15px_rgba(217,119,6,0.5)]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="currentColor"
            className="text-gray-900 shadow-amber-600 shadow-xl"
          />
        </svg>
      </div>
    </div>
  );
};

export default TabScreen;
