import React, { FC } from "react";
import { getSet } from "../../firebase";
import { useNavigate } from "react-router-dom";

const ImportSet: FC = () => {
  const [setShown, setSetShown] = React.useState<boolean>(false);
  const [setLink, setSetLink] = React.useState<string>("");

  // Arbitrary link for test : "builds/ce35e791-d760-4094-856e-8ea3a832d98d"
  const navigate = useNavigate();
  console.log(setLink);
  const handleBack = () => {
    if (!setShown) {
      navigate("/");
    }
  };

  const handleChange = (e: any) => {
    setSetLink(e.target.value);
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
          setShown ? "hidden" : "flex"
        } flex-col items-center justify-center bg-slate-900 text-teal-100
       w-phoneSize p-4 mt-44 rounded`}
      >
        <form className="flex flex-col items-center justify-center">
          <h3 className="text-xl mb-4 text-center p-2">
            Paste the link representing a set of builds
          </h3>
          <label
            className="flex flex-col items-center justify-center"
            htmlFor="set-link"
          >
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="rounded h-10 text-slate-900 m-4 mb-8 text-base focus:outline-none focus:ring
              focus:ring-cyan-600 p-2"
            ></input>
          </label>
        </form>
        <button
          onClick={(e: any) => {
            e.preventDefault();
            console.log(setLink);
            getSet("builds/ce35e791-d760-4094-856e-8ea3a832d98d");
          }}
          className="bg-teal-100 text-slate-900 p-2 rounded text-xl border-2 border-teal-100
        hover:bg-slate-900 hover:text-teal-100"
        >
          Import set
        </button>
      </div>
    </div>
  );
};

export { ImportSet };
