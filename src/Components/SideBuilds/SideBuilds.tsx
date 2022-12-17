import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import { SideItem } from "./SideItem";

interface Props {
  builds: Array<Build>;
  setBuilds: Function;
}

export const SideBuilds: FC<Props> = ({ builds, setBuilds }) => {
  const buildsList = builds.map((build, index) => {
    return (
      <SideItem
        builds={builds}
        setBuilds={setBuilds}
        id={build.link}
        build={build}
        key={index}
      />
    );
  });

  const saveBuilds = (builds: Array<Build>) => {
    localStorage.clear();
    return console.log(builds);
  };

  return (
    <div
      className={`${
        builds.length ? "flex" : "hidden"
      } absolute top-20  flex-col items-center justify-center p-1 bg-slate-900 rounded pt-5 w-phoneSize m-5 mt-36 mb-10 mr-10 h-auto `}
    >
      <h3 className="text-2xl text-teal-100 mb-2">
        Current builds in this set
      </h3>
      <div>{buildsList} </div>
      <button
        onClick={() => {
          saveBuilds(builds);
          setBuilds([]);
        }}
        className="bg-teal-100 text-slate-900 p-3 m-2 rounded hover:bg-slate-900 hover:text-teal-100 hover:border"
      >
        Save set of builds
      </button>
    </div>
  );
};
