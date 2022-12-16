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
    <div className=" absolute top-20 flex flex-col items-center justify-center p-1 bg-slate-900 rounded w-phoneSize m-5 mt-36 h-auto ">
      <h3 className="text-lg text-teal-100">Current builds in this set</h3>
      <div>{buildsList} </div>
      <button className="bg-teal-100 text-slate-900 p-3 m-2 rounded hover:bg-slate-900 hover:text-teal-100 hover:border">
        Save set of builds
      </button>
    </div>
  );
};
