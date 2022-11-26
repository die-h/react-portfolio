import React from "react";
import { TwitterTimeline } from "components/TwiterTimeline";
import Head from "next/head";

const TwitterHome = () => {
  return (
    <>
      <Head>
        <title>Twitter Timeline</title>
      </Head>
      <TwitterTimeline />
    </>
  );
};

export default TwitterHome;
