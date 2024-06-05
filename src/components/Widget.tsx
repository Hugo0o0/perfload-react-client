import usePerformanceData from "utils/hooks/usePerformanceData";
import Cpu from "./Cpu";
import Info from "./Info";
import Memory from "./Memory";
import "./Widget.css";
import NotConnected from "./NotConnected";

const Widget = () => {
  const { performanceData } = usePerformanceData();
  return (
    <>
      {performanceData?.map((data) => (
        <div
          className="widget row justify-content-evenly"
          key={data.macAddress}
        >
          {data.isConnected ? (
            <>
              <Cpu cpuLoad={data.cpuLoad} />
              <Memory
                freeMem={data.freeMemory}
                memUsage={data.memoryUsage}
                totalMem={data.totalMemory}
                usedMem={data.usedMemory}
              />
              <Info
                macA={data.macAddress}
                osType={data.osType}
                upTime={data.osUptime}
                cpuType={data.cpuModel}
                cpuSpeed={data.cpuSpeed}
                numCores={data.numberOfCpuCores}
              />
            </>
          ) : (
            <NotConnected
              reason={data.reason!}
              macAddress={data.machineMacAdress}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Widget;
