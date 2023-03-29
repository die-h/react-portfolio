import React from "react";
import Head from "next/head";
import {
  DesktopNavbar,
  TwitterTimeline,
  AsideSection,
} from "components/TwiterTimeline";

const TwitterHome = () => {
  return (
    <>
      <Head>
        <title>Twitter Timeline Project</title>
      </Head>

      <div style={{ display: "flex", justifyContent: "center", position: "relative", backgroundColor: "black"}}>
        <DesktopNavbar />
        <TwitterTimeline />
        <AsideSection />
      </div>
    </>
  );
  };

export default TwitterHome;
