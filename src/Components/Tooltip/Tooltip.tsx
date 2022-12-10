import { FC } from "react";

interface Props {
  text: string;
  shown: boolean;
}

const Tooltip: FC<Props> = ({ text, shown }) => {
  return (
    <div
      className={
        !shown
          ? "hidden"
          : "flex items-center justify-center  w-40 h-32 text-center text-teal-100 text-lg mt-6"
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
