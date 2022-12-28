import React, { FC } from "react";
import { useQuery } from "react-query";
import { getTest } from "../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

interface Props {
  link: string;
}

const ImportTest: FC<Props> = ({ link }) => {
  return <div></div>;
};

export { ImportTest };
