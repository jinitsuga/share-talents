import { useState, FC, EventHandler } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  tooltip: string;
  text: string;
  onClick: any; // useNavigate from r-router-dom
}

const Option: FC<Props> = ({ text, tooltip, onClick }) => {
  const [tooltipShown, setTooltipShown] = useState(false);

  const handleEnter = () => {
    setTooltipShown(true);
  };
  const handleLeave = () => {
    setTooltipShown(false);
  };

  return (
    <div className="h-80 flex flex-col items-center justify-start m-2">
      <button
        onClick={onClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="text-slate-200 bg-slate-900 border w-52 h-32 rounded border-transparent text-xl p-2 self-end
         hover:text-teal-100 hover:scale-110 active:bg-slate-300 active:text-slate-900"
      >
        {text}
      </button>
      <Tooltip shown={tooltipShown} text={tooltip} />
    </div>
  );
};

export { Option };
