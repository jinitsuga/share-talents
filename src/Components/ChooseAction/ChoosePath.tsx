import { FC } from "react";
import { Option } from "./Option";
import { useNavigate } from "react-router-dom";

//  Create talents set
// </button>
// <Tooltip text="Make a new set of talents from scratch" />

// View/Edit an existing set
// </button>
// <Tooltip text="import an existing set to browse, or edit it into a new one" />

interface Props {}

const ChoosePath: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-80 flex items-center justify-center mt-10 ">
      <Option
        onClick={() => {
          navigate("/create-build");
        }}
        text="Create talents set"
        tooltip="Make a new set of talents from scratch"
      ></Option>
      <Option
        onClick={() => {
          navigate("/create-build");
        }}
        text="View or Edit an existing set"
        tooltip="Import an existing set to browse, or edit it into a new one"
      ></Option>
    </div>
  );
};

export { ChoosePath };
