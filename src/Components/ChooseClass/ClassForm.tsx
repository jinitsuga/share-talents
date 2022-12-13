import React, { FC } from "react";

interface Props {
  character: string;
}

const ClassForm: FC<Props> = ({ character }) => {
  return (
    <form>
      <span>Creating a {character} build.</span>
      <label htmlFor="string">
        Paste your string!
        <input
          type="text"
          placeholder="Paste your string from the clipboard..."
        ></input>
      </label>
      <label htmlFor="build-details">
        <textarea
          maxLength={300}
          placeholder="Share details about the build"
        ></textarea>
      </label>
    </form>
  );
};

export { ClassForm };
