import React, { FC } from "react";
import { SideItem } from "../SideBuilds/SideItem";
import { Build } from "../CreateBuild/CreateBuild";

interface Props {
  importedBuilds: Array<Build>;
  setImported: Function;
}

const ImportedBuilds: FC<Props> = ({ importedBuilds, setImported }) => {
  const builds = importedBuilds.map((build, index) => {
    return (
      <SideItem
        build={build}
        id={build.link}
        builds={importedBuilds}
        setBuilds={setImported}
      />
    );
  });

  return (
    <div
      className="flex-col items-center justify-center
     p-1 bg-slate-900 rounded pt-5 w-phoneSize h-auto"
    >
      <h3 className="text-2xl text-teal-100 mb-2">Imported builds:</h3>
    </div>
  );
};

export { ImportedBuilds };
