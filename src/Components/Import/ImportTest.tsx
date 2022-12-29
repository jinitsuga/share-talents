import React, { FC } from "react";
import { useQuery } from "react-query";
import { db } from "../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { SideItem } from "../SideBuilds/SideItem";
import { Build } from "../CreateBuild/CreateBuild";

interface Props {
  link: string;
}

function getTest(link: any) {
  const ref = query(collection(db, "sets"), where("link", "==", link));

  const queryBuilds = useFirestoreQuery("get-builds", ref);

  return queryBuilds;
}

const ImportTest: FC<Props> = ({ link }) => {
  const { isLoading, data } = getTest(link);

  let importedBuilds: Array<Build> = [];

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  data
    ? data.docs.map((doc) => {
        doc.data().builds.map((build: any) => {
          importedBuilds.push(build);
        });
      })
    : "";

  const builds = importedBuilds.length
    ? importedBuilds.map((build, index) => {
        return (
          <SideItem
            key={index}
            build={build}
            id={build.link}
            builds={importedBuilds}
            setBuilds=""
          />
        );
      })
    : "";

  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-800 p-4
    mt-20 rounded"
    >
      <h4 className="text-center text-lg text-teal-100 mb-2">
        Builds in this set:
      </h4>
      <div>{builds}</div>
    </div>
  );
};

export { ImportTest };
