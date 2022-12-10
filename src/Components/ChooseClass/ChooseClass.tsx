import React, { FC } from "react";
import { classesData } from "./ClassesData";
import { Class } from "./Class";

console.log("chooseclassCOmpopnent");

// Bake input + comment component into this one to maintain the same route

const ChooseClass: FC = () => {
  const [buildData, setBuildData] = React.useState({});

  const classBlocks = classesData.map((classData) => {
    return <Class {...classData} />;
  });

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h3 className="text-teal-100 text-3xl mb-8">Select a class</h3>
      <div className="flex flex-row flex-wrap items-center justify-center w-classContainer h-auto">
        {classBlocks}
      </div>
    </div>
  );
};

export { ChooseClass };
