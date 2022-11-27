import React from "react";
import { TwitterTimeline } from "components/TwiterTimeline";
import Head from "next/head";

const TwitterHome = () => {
  return (
    <>
      <Head>
        <title>
          Twitter Timeline
        </title>
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div></div>
        <TwitterTimeline />
        <div></div>
      </div>
    </>
  );
};

export default TwitterHome;
