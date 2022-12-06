import React from "react";
import {
  DesktopNavbar,
  TwitterTimeline,
  AsideSection,
} from "components/TwiterTimeline";
import Head from "next/head";

const TwitterHome = () => {
  return (
    <>
      <Head>
        <title>Twitter Timeline Project</title>
      </Head>
      <div style={{ display: "flex", justifyContent: "center", position: "relative"}}>
        <DesktopNavbar />
        <TwitterTimeline />
        <AsideSection />
      </div>
    </>
  );
  };

export default TwitterHome;
