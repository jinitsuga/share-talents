import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import Tooltip from "../Tooltip/Tooltip";

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
  };

  return (
    <div
      className={` relative flex flex-row bg-${background} p-4 rounded mb-2 `}
    >
      <div className={`w-60 flex flex-col rounded bg-${background}  `}>
        <h4 className="text-sm">{build.class} build</h4>
        <span className="text-xs w-32">qweeEEEEEEEEEEEERRRR444123yyu</span>
        <span
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="text-xs hover:cursor-pointer w-32"
        >
          + details
        </span>
      </div>
      <div className=" flex flex-col space-y-5 justify-center items-center">
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
          className="w-10 h-8 text-xs text-slate-900 bg-teal-100 rounded  text-center mt-2 hover:bg-slate-900
       border-slate-900 border-2 hover:text-teal-100 active:bg-cyan-600"
        >
          copy
        </button>
      </div>
      <Tooltip
        build="yes"
        text="some random details about the build"
        shown={detailsShown}
      />
    </div>
  );
};
