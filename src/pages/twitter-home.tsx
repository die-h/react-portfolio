import React from "react";
import { DesktopNavbar } from "components/TwiterTimeline";
import { TwitterTimeline } from "components/TwiterTimeline";
import Head from "next/head";

const TwitterHome = () => {
  return (
    <>
      <Head>
        <title>Twitter Timeline</title>
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DesktopNavbar />
        <TwitterTimeline />
        <div></div>
      </div>
    </>
  );
};

export default TwitterHome;
