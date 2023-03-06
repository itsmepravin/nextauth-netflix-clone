import { useRouter } from "next/router";

import useMovie from "../../hooks/useMovie";

import { Icon } from "@iconify/react";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <Icon
          icon="material-symbols:arrow-back-sharp"
          color="white"
          fontSize={40}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
    </div>
  );
};

export default Watch;
