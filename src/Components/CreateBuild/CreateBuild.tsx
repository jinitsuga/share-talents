import React, { ChangeEvent, FC } from "react";
import { classesData, Character } from "./ClassesData";
import { Class } from "./Class";
import ClassForm from "./ClassForm";
import { useNavigate } from "react-router-dom";

// Bake input + comment component into this one to maintain the same route

const ChooseClass: FC = () => {
  const [buildData, setBuildData] = React.useState({
    class: "",
    link: "",
    details: "",
  });
  const [classesShown, setClassesShown] = React.useState(true);

  console.log(JSON.parse(localStorage.getItem("builds") || "[]"));

  const [errorMsgs, setErrorMsgs] = React.useState("");

  const navigate = useNavigate();

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBuildData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
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
      localStorage.setItem("builds", JSON.stringify([]));
    } else {
      const oldBuilds = JSON.parse(localStorage.getItem("builds") || "[]");
      localStorage.setItem("builds", JSON.stringify([...oldBuilds, buildData]));
    }
  };

  const handleBack = () => {
    if (!classesShown) {
      setClassesShown(true);
      setBuildData({ class: "", link: "", details: "" });
    }
    if (classesShown) {
      navigate("/");
    }
  };

  const toggleClasses = () => {
    setClassesShown(!classesShown);
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
        }  flex-col items-center justify-center mt-20 w-9/12`}
      >
        <h3 className="bg-slate-900 text-teal-100 text-3xl mb-8 p-5 rounded">
          Select a class
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-center w-classContainer h-auto">
          {classBlocks}
        </div>
      </div>

      <ClassForm
        saveBuild={saveBuild}
        character={buildData.class}
        shown={classesShown}
        inputHandler={handleInput}
        linkValue={buildData.link}
        detailsValue={buildData.details}
        error={errorMsgs}
      />
    </div>
  );
};
// bru
export { ChooseClass };
