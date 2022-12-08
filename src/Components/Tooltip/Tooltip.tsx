import { FC } from "react";

interface Props {
  text: string;
  shown: boolean;
}

const Tooltip: FC<Props> = ({ text, shown }) => {
  return (
    <div
      className={
        !shown ? "hidden" : "flex items-center justify-center  w-36 h-32 "
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
