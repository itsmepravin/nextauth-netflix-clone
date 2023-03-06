import { useRouter } from "next/router";

import useMovie from "../../hooks/useMovie";

import { Icon } from "@iconify/react";

import { useEffect, useState } from "react";

const Watch = () => {
  const router = useRouter();

  const [currMovie, setCurrMovie] = useState(null);

  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
  if (router.isReady) {
  }

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <Icon
          onClick={() => router.push("/")}
          icon="material-symbols:arrow-back-sharp"
          color="white"
          fontSize={40}
          className="cursor-pointer"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
