import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import { SideItem } from "./SideItem";

interface Props {
  builds: Array<Build>;
  // delete: Function;
}

export const SideBuilds: FC<Props> = ({ builds }) => {
  const buildsList = builds.map((build) => {
    return <SideItem key={build.link} build={build} />;
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-lg">Current builds in this set</h3>
      <div>{buildsList} </div>
    </div>
  );
};
