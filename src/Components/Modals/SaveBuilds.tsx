import React, { FC } from "react";

// Write an app explanation in landing component
// Generate a unique link. - Check out React Query for fetching to firebase

interface Props {
  saveBuilds: Function;
  setLink: string;
  // shown: boolean;
  setShownModal: Function;
}

const SaveBuilds: FC<Props> = ({ saveBuilds, setShownModal, setLink }) => {
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

    return () => {
      console.log("unmounted");
      document.removeEventListener("click", checkForClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex fixed inset-0 bg-modalBg items-center justify-center`}
    >
      <div
        ref={modalRef}
        className="flex flex-col items-center justify-center
      bg-teal-100 text-slate-900 h-80 w-80 rounded p-10 border-slate-900"
      >
        <h4 className="mb-8 text-xl text-center">
          A unique link will be generated. Use it to access this set of builds
          whenever you want.
        </h4>
        <button
          className="bg-slate-900 text-teal-100 p-4 rounded text-lg
          hover:bg-teal-100 hover:text-slate-900 hover:border-slate-900 hover:border-2 active:bg-cyan-600"
          onClick={() => {
            saveBuilds();
            setLinkShown(true);
            // setShownModal(false);
          }}
        >
          Save set of builds
        </button>
        <span className={`${linkShown ? "block" : "hidden"}`}></span>
      </div>
    </div>
  );
};

export { SaveBuilds };
