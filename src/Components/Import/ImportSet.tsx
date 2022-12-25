import React, { FC } from "react";
import { getSet } from "../../firebase";
import { useNavigate } from "react-router-dom";

const ImportSet: FC = () => {
  const [buildsShown, setBuildsShown] = React.useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    if (!buildsShown) {
      navigate("/");
    }
  };

  return (
    <div className=" relative w-screen flex flex-col items-center">
      <div
        className="self-start ml-20 mt-10 text-2xl text-teal-100 bg-slate-900 rounded p-2 hover:cursor-pointer
         hover:bg-teal-100 hover:text-slate-900 active:bg-cyan-600"
        onClick={handleBack}
      >
        ↩ back
      </div>
      <div
        className={`${
          buildsShown ? "hidden" : "flex"
        } flex-col items-center justify-center bg-slate-900 text-teal-100
       w-phoneSize p-4 mt-60 rounded`}
      >
        <form className="flex flex-col items-center justify-center">
          <h3 className="text-xl mb-4 text-center">
            Paste the link representing a set of builds
          </h3>
          <label
            className="flex flex-col items-center justify-center"
            htmlFor="set-link"
          >
            <input className="rounded h-10 text-slate-900"></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export { ImportSet };
