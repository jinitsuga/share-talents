import React, { FC } from "react";
import { classesData, Character } from "./ClassesData";
import { Class } from "./Class";
import { ClassForm } from "./ClassForm";

console.log("chooseclassCOmpopnent");

// Bake input + comment component into this one to maintain the same route

const ChooseClass: FC = () => {
  const [buildData, setBuildData] = React.useState({});
  const [classesShown, setClassesShown] = React.useState(true);

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
    <div className="flex flex-col items-center justify-center mt-20 w-9/12">
      <div className="self-start ml-20 text-2xl text-teal-100 bg-slate-900 rounded p-2">
        ↩ back
      </div>
      <h3 className="bg-slate-900 text-teal-100 text-3xl mb-8 p-5 rounded">
        Select a class
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-center w-classContainer h-auto">
        {classBlocks}
      </div>
    </div>
  );
};
// bru
export { ChooseClass };
