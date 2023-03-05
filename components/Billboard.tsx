import { useRef } from "react";

import useBillboard from "../hooks/useBillboard";

import { Icon } from "@iconify/react";

//2:46:35

const Billboard = () => {
  const { data } = useBillboard();

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-[46.25vw]">
      <video
        className="w-full h-[46.25vw] object-cover brightness-[80%]"
        ref={videoRef}
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        controls
        autoPlay
        muted
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-40 transition">
            <Icon className="mr-1 mt-[2px]" icon="bi:info-circle" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;