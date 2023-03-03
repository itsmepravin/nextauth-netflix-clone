import type { NextPage, NextPageContext } from "next";

import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "../hooks/useCurrentUser";

const Home: NextPage = () => {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-2xl text-orange-400">Netflix Clone</h1>
      <p className="text-orange-400">Username: {user?.email}</p>
      <button
        onClick={() => signOut()}
        className="bg-white w-full h-10 rounded-md"
      >
        Logout
      </button>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
