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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  let importedBuilds: Array<Build> = [];

  data
    ? data.docs.map((doc) => {
        doc.data().builds.map((build: any) => {
          importedBuilds.push(build);
        });
      })
    : "";

  return <div></div>;
};

export { ImportTest };
