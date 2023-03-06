import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prismadb";

import serverAuth from "../../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await serverAuth(req);

    const { movieId } = req.query;

    console.log("movieId", movieId);
    // if (!movieId) throw new Error("No movie ID!");
    // if (typeof movieId !== "string") throw new Error("Invalid ID!");

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId as string,
      },
    });

    console.log("movie", movie);

    if (!movie) throw new Error("Could not find movie!");

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
