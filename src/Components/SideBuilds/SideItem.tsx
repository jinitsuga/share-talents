import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import Tooltip from "../Tooltip/Tooltip";
import { copyText } from "../../clipboard";

interface Props {
  build: Build;
  builds: Array<Build>;
  setBuilds: Function;
  id: string;
}

export const SideItem: FC<Props> = ({ build, builds, setBuilds, id }) => {
  const [detailsShown, setDetailsShown] = React.useState(false);

  // Bg-color corrections (tailwind config file)
  let background = build.class.toLowerCase();
  if (build.class == "Death Knight") {
    background = "dk";
  }
  if (build.class == "Demon Hunter") {
    background = "dh";
  }

  const handleEnter = () => {
    setDetailsShown(true);
  };
  const handleLeave = () => {
    setDetailsShown(false);
  };

  const deleteBuild = () => {
    console.log(id);
    const newBuilds = builds.filter((build) => build.link !== id);
    if (newBuilds.length < 1) {
      localStorage.clear();
    }
    setBuilds(newBuilds);
  };

  return (
    <div
      className={` relative flex flex-row bg-${background} p-4 rounded-md  mb-2 border-4 border-slate-900 hover:border-teal-100 `}
    >
      <div
        className={`w-60 flex flex-col rounded bg-${background} text-md space-y-0.5`}
      >
        <h4 className="text-sm">
          {build.name ? build.name : `${build.class} build`}
        </h4>
        <span className="text-xs w-32">{build.link}</span>
        <span
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="text-xs hover:cursor-pointer w-32"
        >
          + details
        </span>
      </div>
      <div className="flex flex-col space-y-5 justify-center items-center">
        <div
          onClick={() => {
            deleteBuild();
          }}
          className="flex justify-center items-center text-center border text-lg text-teal-100 w-6 h-6 -mr-8 -mt-3
        hover: cursor-pointer bg-slate-900 hover:bg-teal-100 hover:text-slate-900"
        >
          X
        </div>
        <button
          onClick={() => {
            copyText(build.link);
          }}
          className="w-10 h-8 text-xs text-slate-900 bg-teal-100 rounded text-center mt-2 hover:bg-slate-900
       border-slate-900 border-2 hover:text-teal-100 active:bg-cyan-600"
        >
          copy
        </button>
      </div>
      <Tooltip
        build={innerWidth <= 768 ? null : "yes"}
        mobile={innerWidth >= 768 ? null : "mobile"}
        text={build.details ? build.details : "No details"}
        shown={detailsShown}
      />
    </div>
  );
};
