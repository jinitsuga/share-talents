import React, { FC } from "react";
import { copyText } from "../../clipboard";

// Write an app explanation in landing component
// Generate a unique link. - Check out React Query for fetching to firebase

interface Props {
  saveBuilds: Function;
  setLink: string;
  // shown: boolean;
  setShownModal: Function;
}

const SaveBuilds: FC<Props> = ({ saveBuilds, setShownModal, setLink }) => {
  const [linkShown, setLinkShown] = React.useState<boolean>(false);

  const modalRef = React.useRef(null);

  console.log(linkShown);

  React.useEffect(() => {
    const checkForClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("click trigger");

        setShownModal(false);

        setLinkShown(false);
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
      bg-teal-100 text-slate-900 h- w-96 rounded p-10 border-slate-900"
      >
        <h4 className="mb-8 text-xl text-center">
          A unique link will be generated. Use it to access this set of builds
          whenever you want.
        </h4>
        <button
          className={`${
            linkShown ? "hidden" : "block"
          } hover:bg-teal-100 hover:text-slate-900 hover:border-slate-900 hover:border-2 bg-slate-900 text-teal-100 p-4 rounded text-lg
          active:bg-cyan-600
         }`}
          onClick={() => {
            saveBuilds().then(() => {
              setLinkShown(true);
            });
            // setShownModal(false);
          }}
        >
          Save set of builds
        </button>
        <div
          className={`${
            linkShown ? "flex" : "hidden"
          } flex-col items-center justify-center  bg-slate-900 text-teal-100 p-6 rounded border text-center `}
        >
          <button
            onClick={() => {
              copyText(`share-talents.com/imported/builds-${setLink}`);
            }}
            className="w-20 h-16 text-lg text-slate-900 bg-teal-100 text-center rounded mb-1 p-4 hover:bg-slate-500
       border-slate-900  hover:text-teal-100 active:bg-cyan-600"
          >
            copy
          </button>
          <span>share-talents.com/imported/builds-{setLink}</span>
        </div>
      </div>
    </div>
  );
};

export { SaveBuilds };
