import { FC } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface Props {}

const Choose: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-10 ">
      <div className="flex flex-col items-center justify-center">
        <button className="text-slate-200 bg-slate-900 border mr-4 w-48 h-32 rounded border-transparent text-lg p-1">
          Create talents set
        </button>
        <Tooltip text="Make a new set of talents from scratch" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="text-slate-200 bg-slate-900 border w-48 h-32 rounded border-transparent text-lg p-1">
          View/Edit an existing set
        </button>
        <Tooltip text="import an existing set to browse, or edit it into a new one" />
      </div>
    </div>
  );
};

export { Choose };
