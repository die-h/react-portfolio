import React from "react";
import Head from "next/head";
import {
  PinterestHeader,
  PinterestBoard,
} from "components/PinterestInterface";

const pinterestInterface = () => {
  return (
    <>
      <Head>
        <title>Pinterest Interface Project</title>
      </Head>
      <PinterestHeader />
      <PinterestBoard />
    </>
  );
};

export default pinterestInterface;
