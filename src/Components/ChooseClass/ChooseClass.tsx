import { FC } from "react";
import { classesData } from "./ClassesData";
import { Class } from "./Class";

console.log("chooseclassCOmpopnent");

const ChooseClass: FC = () => {
  const classBlocks = classesData.map((classData) => {
    return <Class {...classData} />;
  });

  return (
    <div className="flex flex-row items-center justify-center h-80">
      {classBlocks}
    </div>
  );
};

export { ChooseClass };
