import React, { FC } from "react";

// Write an app explanation in landing component
// Generate a unique link. - Check out React Query for fetching to firebase

interface Props {
  saveBuilds: Function;
  shown: boolean;
}

const SaveBuilds: FC<Props> = ({ shown, saveBuilds }) => {
  const [linkShown, setLinkShown] = React.useState(false);

  return (
    <div
      className={`${
        shown ? "flex" : "hidden"
      } fixed inset-0 bg-modalBg items-center justify-center`}
    >
      <div
        className="flex flex-col items-center justify-center
      bg-teal-200 text-slate-900 h-80 w-80 rounded p-4"
      >
        <h4>
          Your builds will be saved, and a unique link will be generated for you
          to access this set of buils whenever you want.
        </h4>
        <button
          onClick={() => {
            saveBuilds();
            setLinkShown(true);
          }}
        >
          Save set of builds
        </button>
      </div>
    </div>
  );
};

export { SaveBuilds };
