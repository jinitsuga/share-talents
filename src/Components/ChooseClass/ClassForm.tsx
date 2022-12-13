import React, { FC } from "react";

interface Props {
    class: string;
}

const ClassForm: FC<Props> = ({ class }) => {
  return (
    <form>
      <label htmlFor="string">
        Paste your string!
        <input
          type="text"
          placeholder="Paste your string from the clipboard..."
        ></input>
      </label>
      <label htmlFor="build-details">
        <textarea> </textarea>
      </label>
    </form>
  );
};

export { ClassForm };
