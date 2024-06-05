import { FC } from "react";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar";
import strokeColorByValue from "utils/strokeColorByValue";

interface CpuProps {
  cpuLoad: number;
}

const Cpu: FC<CpuProps> = ({ cpuLoad }) => {
  const color = strokeColorByValue(cpuLoad);
  return (
    <div className="cpu col-3">
      <h3>CPU Load</h3>
      <ProgressBar strokeColor={color} value={cpuLoad} text={`${cpuLoad}%`} />
    </div>
  );
};

export default Cpu;
