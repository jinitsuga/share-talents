import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  build: Build;
}

export const SideItem: FC<Props> = ({ build }) => {
  const [detailsShown, setDetailsShown] = React.useState(false);

  const background = build.class.toLowerCase();

  const handleEnter = () => {
    setDetailsShown(true);
  };
  const handleLeave = () => {
    setDetailsShown(false);
  };

  return (
    <div className={`w-80 flex flex-col rounded bg-${background} m-2 p-1`}>
      <h4 className="text-sm">{build.class} build</h4>
      <span className="text-xs">qweeEEEEEEEEEEEERRRR444123yyu</span>
      <Tooltip
        text="some random details about the build"
        shown={detailsShown}
      />
    </div>
  );
};
