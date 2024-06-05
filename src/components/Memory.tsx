import { FC } from "react";
import ProgressBar from "./ProgressBar";
import strokeColorByValue from "utils/strokeColorByValue";

interface MemoryProps {
  freeMem: number;
  totalMem: number;
  usedMem: number;
  memUsage: number;
}

const Memory: FC<MemoryProps> = ({ freeMem, memUsage, totalMem, usedMem }) => {
  const color = strokeColorByValue(memUsage);
  const totalMemInGB = (totalMem / 1073741824).toFixed(2);
  const freeMemInGB = (freeMem / 1073741824).toFixed(2);

  return (
    <div className="mem col-3">
      <h3>Memory Usage</h3>
      <ProgressBar strokeColor={color} value={memUsage} text={`${memUsage}%`} />
      <div>Total Memory: {totalMemInGB}GB</div>
      <div>Used Memory: {freeMemInGB}MB</div>
    </div>
  );
};

export default Memory;
