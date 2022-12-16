import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import { SideItem } from "./SideItem";

interface Props {
  builds: Array<Build>;
  // delete: Function;
}

export const SideBuilds: FC<Props> = ({ builds }) => {
  const buildsList = builds.map((build) => {
    return <SideItem build={build} />;
  });

  return (
    <div>
      <h3>Current builds in this set</h3>
      <div></div>
    </div>
  );
};
