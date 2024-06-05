import { FC } from "react";
import moment from "moment";

interface InfoProps {
  macA: string;
  osType: string;
  upTime: number;
  cpuType: string;
  cpuSpeed: number;
  numCores: number;
}

const Info: FC<InfoProps> = ({
  cpuSpeed,
  cpuType,
  macA,
  numCores,
  osType,
  upTime,
}) => {
  return (
    <div className="col-sm-3 col-sm-offset-1 cpu-info">
      <h3>Operating System</h3>
      <div className="widget-text">{osType}</div>
      <h3>Time Online</h3>
      <div className="widget-text">{moment.duration(upTime).humanize()}</div>
      <h3>Processor Information</h3>
      <div className="widget-text">
        <strong>Type:</strong> {cpuType}
      </div>
      <div className="widget-text">
        <strong>Number of Cores:</strong> {numCores}
      </div>
      <div className="widget-text">
        <strong>Clock Speed:</strong> {cpuSpeed}
      </div>
      <h3>Network Information</h3>
      <div className="widget-text">
        <strong>Mac Adress:</strong> {macA}
      </div>
    </div>
  );
};

export default Info;
