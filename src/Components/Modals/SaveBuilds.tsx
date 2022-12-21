import React, { FC } from "react";

// Write an app explanation in landing component
// Generate a unique link. - Check out React Query for fetching to firebase

interface Props {
  saveBuilds: Function;
  shown: boolean;
}

const SaveBuild: FC<Props> = ({ shown, saveBuilds }) => {
  const [linkShown, setLinkShown] = React.useState(false);

  return (
    <div className={`${shown ? "flex" : "hidden"} fixed inset-0`}>
      <div>
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

export { SaveBuild };
