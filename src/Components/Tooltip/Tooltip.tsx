import { FC } from "react";

interface Props {
  text: string;
  shown: boolean;
  build?: string;
}

const Tooltip: FC<Props> = ({ text, shown, build }) => {
  return (
    <div
      className={
        !shown
          ? "hidden"
          : `flex items-center justify-center p-4  w-56 text-teal-100  text-center  text-lg mt-6 ${
              build
                ? "absolute left-80 bg-teal-100 rounded text-slate-900 border border-slate-900 border-2 z-10 text-md"
                : ""
            }`
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
