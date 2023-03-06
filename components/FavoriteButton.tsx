import { Icon } from "@iconify/react";

import axios from "axios";

import { FC, useCallback, useMemo } from "react";

import useFavorites from "../hooks/useFavorites";

import useCurrentUser from "../hooks/useCurrentUser";

interface IFavoriteButton {
  movieId: string;
}

const FavoriteButton: FC<IFavoriteButton> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isMovieInFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isMovieInFavorite) {
      response = await axios.delete("/api/favorite", {
        data: { movieId },
      });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response.data.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [movieId, isMovieInFavorite, currentUser, mutate, mutateFavorites]);

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon
        icon={isMovieInFavorite ? "bi:check2" : "material-symbols:add"}
        fontSize={25}
        color="white"
      />
    </div>
  );
};

export default FavoriteButton;
