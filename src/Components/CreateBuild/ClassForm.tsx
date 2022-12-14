import React, { FC } from "react";

interface Props {
  character: string;
  shown: boolean;
  inputHandler: Function;
  linkValue: string;
  nameValue: string;
  detailsValue: string;
  error: string;
  saveBuild: Function;
  toggleClasses: Function;
}

const ClassForm: FC<Props> = ({
  character,
  shown,
  inputHandler,
  linkValue,
  nameValue,
  detailsValue,
  error,
  saveBuild,
  toggleClasses,
}) => {
  return (
    <form
      className={`${
        shown ? "hidden" : "flex"
      }  flex-col items-center justify-center m-10 max-md:mr-0  max-xl:-mr-96 max-md:m-0`}
    >
      <h3 className="text-teal-50 p-4 text-4xl m-4">
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
        htmlFor="build-name"
        className="m-2 flex flex-col items-center justify-center w-80 text-teal-100"
      >
        Build name (optional)
        <input
          name="name"
          maxLength={24}
          onChange={(e) => {
            inputHandler(e);
          }}
          value={nameValue}
          placeholder="Name your build"
          className="m-4 rounded focus:outline-none focus:ring focus:ring-slate-900 p-2 text-base text-slate-900"
        ></input>
      </label>
      <label
        htmlFor="build-details"
        className="m-2 flex flex-col items-center justify-center w-80 text-teal-100"
      >
        Details/comments (optional)
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

export { ClassForm };
