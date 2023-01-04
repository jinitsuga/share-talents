import { FC } from "react";
import { Option } from "./Option";
import { useNavigate } from "react-router-dom";
import logo from "/images/logo.png";

const ChoosePath: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-80 flex flex-col items-center justify-center mt-24">
      <img
        className="hover:cursor-pointer h-44 w-44 m-20"
        src={logo}
        onClick={() => {
          navigate("/");
        }}
        alt="talent trees logo"
      ></img>
      <div className="flex flex-row items-center justify-center">
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
    </div>
  );
};

export { ChoosePath };
