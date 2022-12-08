import { useState, FC, EventHandler } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  tooltip: string;
  text: string;
}

const Option: FC<Props> = ({ text, tooltip }) => {
  const [tooltipShown, setTooltipShown] = useState(false);

  const handleEnter = () => {
    setTooltipShown(true);
  };
  const handleLeave = () => {
    setTooltipShown(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="text-slate-200 bg-slate-900 border mr-4 w-48 h-32 rounded border-transparent text-lg p-1"
      >
        {text}
      </button>
      <Tooltip shown={tooltipShown} text={tooltip} />
    </div>
  );
};

export { Option };
