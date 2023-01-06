import React, { FC } from "react";
import { getSet } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Build } from "../CreateBuild/CreateBuild";
import { ImportedBuilds } from "./ImportedBuilds";
import { useQuery } from "react-query";

const ImportSet: FC = () => {
  const [setShown, setSetShown] = React.useState<boolean>(false);
  const [setLink, setSetLink] = React.useState<string>("");
  const [imported, setImported] = React.useState<Array<Build>>([]);

  // Arbitrary link for test : "builds-c5863de9-89a2-4c30-8895-db7032cbe4e8"
  const navigate = useNavigate();

  const handleBack = () => {
    if (!setShown) {
      navigate("/");
    }
    if (setShown) {
      setSetShown(false);
    }
  };

  const handleChange = (e: any) => {
    setSetLink(e.target.value);
  };
  return (
    <div className="relative w-screen flex flex-col items-center">
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
              placeholder="Link to a set of builds"
              className="placeholder-gray-500 rounded h-10 text-slate-900 m-4 mb-8 text-base focus:outline-none focus:ring
              focus:ring-cyan-600 p-2"
            ></input>
          </label>
        </form>
        <button
          onClick={async (e: any) => {
            e.preventDefault();
            const set = await getSet(setLink, setImported, setSetShown);
            console.log(set);
          }}
          className="bg-teal-100 text-slate-900 p-2 rounded text-xl border-2 border-teal-100
        hover:bg-slate-900 hover:text-teal-100"
        >
          Import set
        </button>
      </div>
      <div>
        {setShown ? (
          <ImportedBuilds importedBuilds={imported} setImported={setImported} />
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
};

export { ImportSet };
