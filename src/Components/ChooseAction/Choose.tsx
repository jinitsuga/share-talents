import React from "react";
import { FC } from "react";

interface Props {}

const Choose: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-10 ">
      <button className="text-slate-200 bg-slate-900 border mr-4 w-48 h-32 rounded border-transparent text-lg p-1">
        Create talents set
      </button>
      <button className="text-slate-200 bg-slate-900 border w-48 h-32 rounded border-transparent text-lg p-1">
        View/Edit an existing set
      </button>
    </div>
  );
};

export { Choose };
