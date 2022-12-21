import React, { FC } from "react";

// Write an app explanation in landing component
// Generate a unique link. - Check out React Query for fetching to firebase

interface Props {
  saveBuilds: Function;
  shown: boolean;
  setShownModal: Function;
}

const SaveBuilds: FC<Props> = ({ shown, saveBuilds, setShownModal }) => {
  const [linkShown, setLinkShown] = React.useState(false);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const checkForClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("click trigger");
        setShownModal(false);
      }
    };
    document.addEventListener("click", checkForClickOutside, true);
  }, []);

  return (
    <div
      className={`${
        shown ? "flex" : "hidden"
      } fixed inset-0 bg-modalBg items-center justify-center`}
    >
      <div
        ref={modalRef}
        className="flex flex-col items-center justify-center
      bg-teal-100 text-slate-900 h-80 w-80 rounded p-10"
      >
        <h4 className="mb-8 text-xl text-center">
          A unique link will be generated for you to access this set of builds
          whenever you want.
        </h4>
        <button
          className="bg-slate-900 text-teal-100 p-4 rounded text-lg"
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
