import { FC } from "react";

interface Props {
  name: string;
  icon: string;
  color: string;
  text: string;
}

const Class: FC<Props> = ({ name, icon, color, text }) => {
  return (
    <div
      className={`${color} ${text} text-xl w-40 h-24 flex flex-col rounded m-2 justify-center items-center text-center`}
    >
      <span>{name}</span>
    </div>
  );
};

export { Class };
