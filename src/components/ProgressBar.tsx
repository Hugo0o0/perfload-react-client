import { FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
interface ProgressBarProps {
  value: number;
  text: string;
  strokeColor: string;
}
const ProgressBar: FC<ProgressBarProps> = ({ value, text, strokeColor }) => {
  const defaultStyles = {
    path: {
      stroke: strokeColor as any,
    },
    text: {
      fill: "black",
    },
  };
  return (
    <CircularProgressbar styles={defaultStyles} value={value} text={text} />
  );
};

export default ProgressBar;
