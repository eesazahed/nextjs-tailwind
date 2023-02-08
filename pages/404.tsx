import type { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <div className="mx-8">
      <Head>
        <title>404</title>
      </Head>

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-7xl text-center font-bold">Page not found</h1>
      </main>
    </div>
  );
};

export default Custom404;
