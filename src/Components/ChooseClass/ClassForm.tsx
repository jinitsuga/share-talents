import React, { FC } from "react";

interface Props {
  character: string;
}

const ClassForm: FC<Props> = ({ character }) => {
  return (
    <form className="flex flex-col items-center justify-center m-10">
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
          className="m-4 rounded focus:outline-none focus:ring focus:ring-slate-900 p-2 text-base text-slate-900"
          type="text"
          placeholder="Paste your string from the clipboard..."
        ></input>
      </label>
      <label htmlFor="build-details">
        <textarea
          spellCheck={false}
          className="m-4 rounded focus:outline-none focus:ring focus:ring-slate-900 p-2 text-base"
          maxLength={300}
          placeholder="Share details about the build"
        ></textarea>
      </label>
    </form>
  );
};

export { ClassForm };
