import React, { FC } from "react";
import { Build } from "../CreateBuild/CreateBuild";
import { SideItem } from "./SideItem";
import { SaveBuilds } from "../Modals/SaveBuilds";
import { postSet } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

interface Props {
  builds: Array<Build>;
  setBuilds: Function;
}

export const SideBuilds: FC<Props> = ({ builds, setBuilds }) => {
  const [shownModal, setShownModal] = React.useState<boolean>(false);
  const [setLink, setSetLink] = React.useState<string>("");

  const buildsList = builds.map((build, index) => {
    return (
      <SideItem
        builds={builds}
        setBuilds={setBuilds}
        id={build.link}
        build={build}
        key={index}
      />
    );
  });

  const saveBuilds = async () => {
    const uniqid = uuidv4();

    setSetLink(uniqid);

    const thisLink = `builds/${uniqid}`;

    await postSet(thisLink, builds).then((data) => console.log(data));

    // localStorage.clear();
    // setBuilds([]);
    // return console.log(builds);
  };

  return (
    <div
      className={`${
        builds.length ? "flex" : "hidden"
      } absolute max-md:relative max-md:top-0 max-md:self-center max-md:justify-self-center
       top-20 flex-col items-center justify-center p-1 bg-slate-900 rounded pt-5 w-phoneSize m-5 mt-36 mb-10 mr-10 h-auto 
       max-md:mt-12 max-md:mr-0 max-md:m-0 max-md:w-auto`}
    >
      <h3 className="text-2xl text-teal-100 mb-2">
        Current builds in this set
      </h3>
      <div>{buildsList} </div>
      <button
        onClick={() => {
          setShownModal(true);
        }}
        className="bg-teal-100 text-slate-900 p-3 m-2 rounded hover:bg-slate-900 hover:text-teal-100 hover:border"
      >
        Save set of builds
      </button>
      {shownModal ? (
        <SaveBuilds
          setShownModal={setShownModal}
          saveBuilds={saveBuilds}
          setLink={setLink}
        />
      ) : (
        ""
      )}
    </div>
  );
};
