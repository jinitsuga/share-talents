import { FC } from "react";

interface Props {
  name: string;
  icon: string;
  color: string;
  text: string;
}

const Class: FC<Props> = () => {
  return <div className="w-48 h-32"></div>;
};

export { Class };
