import React, { ChangeEvent, FC } from "react";
import { classesData, Character } from "./ClassesData";
import { Class } from "./Class";
import { ClassForm } from "./ClassForm";
import { useNavigate } from "react-router-dom";
import { SideBuilds } from "../SideBuilds/SideBuilds";
// Bake input + comment component into this one to maintain the same route /

export interface Build {
  class: string;
  link: string;
  details: string;
}

const CreateBuild: FC = ({}) => {
  const [buildData, setBuildData] = React.useState<Build>({
    class: "",
    link: "",
    details: "",
  });

  React.useEffect(() => {
    if (localStorage.getItem("builds")) {
      setBuilds(JSON.parse(localStorage.getItem("builds") || "[]"));
      console.log("builds set");
    }
  }, []);

  const [classesShown, setClassesShown] = React.useState(true);

  const [builds, setBuilds] = React.useState<Array<Build>>([]);

  const [errorMsgs, setErrorMsgs] = React.useState("");

  // console.log(JSON.parse(localStorage.getItem("builds") || "[]"));

  // console.log(builds);

  builds.length ? localStorage.setItem("builds", JSON.stringify(builds)) : "";

  const navigate = useNavigate();

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBuildData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const toggleClasses = () => {
    setClassesShown(!classesShown);
  };

  const saveBuild = () => {
    if (buildData.class.length < 3) {
      setErrorMsgs("Make sure you have a class selected!");
      return;
    }

    if (buildData.link.length < 10) {
      setErrorMsgs("Make sure your link is valid!");
      return;
    }

    if (!localStorage.getItem("builds")) {
      localStorage.setItem("builds", JSON.stringify([buildData]));

      setBuilds((oldbuilds) => {
        const newBuilds = [buildData];
        return newBuilds;
      });
      toggleClasses();
    } else {
      // const oldBuilds = JSON.parse(localStorage.getItem("builds") || "[]");
      setBuilds([...builds, buildData]);
      toggleClasses();
    }
  };

  const handleBack = () => {
    if (!classesShown) {
      setClassesShown(true);
      setBuildData({ class: "", link: "", details: "" });
      setErrorMsgs("");
    }
    if (classesShown) {
      navigate("/");
    }
  };

  const handleClass = (e: any) => {
    setBuildData((oldData) => {
      return { ...oldData, class: e.target.textContent };
    });
  };

  const classBlocks = classesData.map((classData: Character) => {
    return (
      <Class
        {...classData}
        onClick={(e: any) => {
          handleClass(e);
          toggleClasses();
        }}
      />
    );
  });

  return (
    <div className="relative">
      <div className={` w-screen flex flex-col justify-center items-center`}>
        <div
          onClick={handleBack}
          className="self-start ml-20 mt-10 text-2xl text-teal-100 bg-slate-900 rounded p-2 hover:cursor-pointer
         hover:bg-teal-100 hover:text-slate-900 active:bg-cyan-600"
        >
          ↩ back
        </div>
        <div
          className={`${
            classesShown ? "flex" : "hidden"
          }  flex-col items-center justify-center mt-20 w-auto `}
        >
          <h3 className="bg-slate-900 text-teal-100 text-3xl mb-8 p-5 rounded">
            Select a class
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-row flex-wrap items-center justify-center w-classContainer h-80 max-xl:w-classContainerSmall pb-4">
              {classBlocks}
            </div>
          </div>
        </div>

        <ClassForm
          toggleClasses={toggleClasses}
          saveBuild={saveBuild}
          character={buildData.class}
          shown={classesShown}
          inputHandler={handleInput}
          linkValue={buildData.link}
          detailsValue={buildData.details}
          error={errorMsgs}
        />
      </div>
      <SideBuilds builds={builds} setBuilds={setBuilds} />
    </div>
  );
};
// bru
export { CreateBuild };
