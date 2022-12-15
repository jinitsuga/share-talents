import React, { FC } from "react";

interface Props {
  character: string;
  shown: boolean;
  inputHandler: Function;
  linkValue: string;
  detailsValue: string;
  error: string;
  saveBuild: Function;
}

const ClassForm: FC<Props> = ({
  character,
  shown,
  inputHandler,
  linkValue,
  detailsValue,
  error,
  saveBuild,
}) => {
  return (
    <form
      className={`${
        shown ? "hidden" : "flex"
      }  flex-col items-center justify-center m-10`}
    >
      <h3 className="text-teal-100 bg-slate-900 p-4 text-2xl m-4">
        Creating a {character} build.
      </h3>
      <label
        className="m-2 flex flex-col items-center justify-center w-80 text-teal-100"
        htmlFor="string"
      >
        Paste your string (text that holds your build) from in-game or other
        sources
        <input
          value={linkValue}
          name="link"
          onChange={(e) => {
            inputHandler(e);
          }}
          className="m-4 rounded focus:outline-none focus:ring focus:ring-slate-900 p-2 text-base text-slate-900"
          type="text"
          placeholder="Paste your string from the clipboard..."
        ></input>
        <span
          className={`${
            error.length > 1 ? "block" : "hidden"
          } text-red-100 text-xl bg-slate-900 p-2 border-red-600 border rounded`}
        >
          {error}
        </span>
      </label>
      <label
        htmlFor="build-details"
        className="m-2 flex flex-col items-center justify-center w-80 text-teal-100"
      >
        Build details (optional)
        <textarea
          value={detailsValue}
          name="details"
          onChange={(e) => {
            inputHandler(e);
          }}
          spellCheck={false}
          className=" text-slate-900 m-4 rounded focus:outline-none focus:ring focus:ring-slate-900 p-2 text-base"
          maxLength={300}
          placeholder="Include some details about the build"
        ></textarea>
      </label>
      <button
        className="bg-teal-100 text-slate-900 p-4 rounded text-xl hover:bg-slate-900 hover:text-teal-100 active:bg-cyan-600"
        onClick={(e) => {
          e.preventDefault();
          saveBuild();
        }}
      >
        Save build
      </button>
    </form>
  );
};

export default ClassForm;
