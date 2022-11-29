import React from "react";
import { AsideLayout, UserToFollow} from "components/TwiterTimeline";
import style from "./WhoToFollow.module.scss";

const WhoToFollow = () => {
  return (
    <AsideLayout>
      <div className={style.container}>
        <h4>Who to follow</h4>
        <UserToFollow/>
        <UserToFollow/>
        <UserToFollow/>
      </div>
    </AsideLayout>
  );
};
export { WhoToFollow };
