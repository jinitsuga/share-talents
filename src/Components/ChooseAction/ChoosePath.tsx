import { FC } from "react";
import { Option } from "./Option";
import { useNavigate } from "react-router-dom";

const ChoosePath: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-80 flex items-center justify-center mt-10 ">
      <Option
        onClick={() => {
          navigate("/create-build");
        }}
        text="Create talents set"
        tooltip="Make a new set of talent builds"
      ></Option>
      <Option
        onClick={() => {
          navigate("/import");
        }}
        text="Import a set"
        tooltip="Import an existing set to browse, or edit it into a new one"
      ></Option>
    </div>
  );
};

export { ChoosePath };
