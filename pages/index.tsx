import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>My site</title>
      </Head>
      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-7xl text-center font-bold">My site</h1>
      </main>
    </div>
  );
};

export default Home;
