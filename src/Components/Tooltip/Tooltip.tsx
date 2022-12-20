import { FC } from "react";

interface Props {
  text: string;
  shown: boolean;
  build?: string | null;
  mobile?: string | null;
}

const Tooltip: FC<Props> = ({ text, shown, build, mobile }) => {
  return (
    <div
      className={
        !shown
          ? "hidden"
          : `flex items-center justify-center p-4  w-56 text-teal-100  text-center  text-lg mt-6 ${
              build
                ? "absolute left-80 bg-teal-100 rounded text-slate-900 border border-slate-900 border-2 z-10 text-md"
                : ""
            } ${
              mobile
                ? "absolute left-20 top-12 bg-teal-100 rounded text-slate-900 border border-slate-900 border-2 z-10 text-md"
                : ""
            } `
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
