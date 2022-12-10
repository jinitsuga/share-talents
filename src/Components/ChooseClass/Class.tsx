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
      className={`${color} ${text} text-lg w-32 h-14 flex flex-col rounded m-2 
      justify-center items-center text-center hover:cursor-pointer hover:opacity-60 hover:scale-115`}
    >
      <span>{name}</span>
    </div>
  );
};

export { Class };
