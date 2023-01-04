import React, { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { db } from "../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { SideItem } from "../SideBuilds/SideItem";
import { Build } from "../CreateBuild/CreateBuild";
import logo from "/images/logo.png";
// import { logo } from "../images/logo.png";
interface Props {
  link: string;
}
// random qwewqeq
function getTest(link: any) {
  const ref = query(collection(db, "sets"), where("link", "==", link));

  const queryBuilds = useFirestoreQuery("get-builds", ref);

  return queryBuilds;
}

const ImportTest: FC = () => {
  //Brings data returned in the route's "loader" function

  const result = useLoaderData();

  const navigate = useNavigate();

  const { isLoading, data, error, isError } = getTest(result);

  let importedBuilds: Array<Build> = [];

  if (isLoading) {
    return (
      <h2 className="bg-slate-900 text-teal-100 p-4 text-xl text-center mt-10">
        Loading...
      </h2>
    );
  }
  if (isError) {
    console.log(error);
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
  console.log(importedBuilds);

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="hover:cursor-pointer h-44 w-44"
        src={logo}
        onClick={() => {
          navigate("/");
        }}
        alt="talent trees logo"
      ></img>
      <div
        className={`${
          builds.length ? "flex" : "hidden"
        } flex-col items-center justify-center bg-slate-800 p-4
    mt-1 rounded`}
      >
        <h4 className="text-center text-lg text-teal-100 mb-2">
          Builds in this set:
        </h4>
        <div>{builds}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("builds", JSON.stringify(importedBuilds));
            navigate("/create-build");
          }}
          className="m-2 p-2 text-lg text-slate-900 bg-teal-100 rounded hover:bg-slate-900 hover:text-teal-100 "
        >
          Edit this set{" "}
        </button>
      </div>

      {/*  Enable the edition of this set, rendering CreateBuild.tsx with 'importedBuilds as prop' */}
      <span
        className={`${
          builds.length ? "hidden" : "block"
        } text-teal-100 bg-slate-900 rounded p-6 text-2xl mt-20`}
      >
        Make sure you're using the correct link. No builds found here!
      </span>
    </div>
  );
};

export { ImportTest };
