import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  build: Build;
}

export const SideItem: FC<Props> = ({ build }) => {
  const [detailsShown, setDetailsShown] = React.useState(false);

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

  return (
    <div
      className={` relative flex flex-row bg-${background} p-4 rounded m-1 `}
    >
      <div className={`w-60 flex flex-col rounded bg-${background}  `}>
        <h4 className="text-sm w-32">{build.class} build</h4>
        <span className="text-xs w-32">qweeEEEEEEEEEEEERRRR444123yyu</span>
        <span
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="text-xs hover:cursor-pointer w-32"
        >
          + details
        </span>
      </div>
      <button
        className="w-10 h-8 text-xs text-slate-900 bg-teal-100 rounded p-1 text-center mt-2 hover:bg-slate-900
      border hover:text-teal-100 active:bg-cyan-600"
      >
        copy
      </button>
      <Tooltip
        build="yes"
        text="some random details about the build"
        shown={detailsShown}
      />
    </div>
  );
};
