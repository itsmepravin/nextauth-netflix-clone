import { without } from "lodash";

import prisma from "../../lib/prismadb";

import serverAuth from "../../lib/serverAuth";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { currentUser } = await serverAuth(req);
    const { movieId } = req.body;
    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!existingMovie) throw new Error("Invalid ID!");

    if (req.method === "POST") {
      const user = await prisma.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });

      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

      const updatedUser = await prisma.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
