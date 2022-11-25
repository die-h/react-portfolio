import React from "react";
import { Header } from "components/TwiterTimeline";
import { Tweet } from "components/TwiterTimeline";

const TwitterTimeline = () => {
  return (
    <>
      <Header />
      <Tweet />
    </>
  );
};

export { TwitterTimeline };
