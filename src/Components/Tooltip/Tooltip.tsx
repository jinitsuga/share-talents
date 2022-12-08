import { FC } from "react";

interface Props {
  text: string;
}

const Tooltip: FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center justify-center  w-36 h-32 ">
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
