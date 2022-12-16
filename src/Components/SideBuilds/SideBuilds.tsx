import React from "react";
import { Build } from "../CreateBuild/CreateBuild";

interface Props {
  builds: Array<Build>;
  delete: Function;
}

export const Builds = ({}) => {
  return (
    <div>
      <h3>Current builds in this set</h3>
      <div></div>
    </div>
  );
};
