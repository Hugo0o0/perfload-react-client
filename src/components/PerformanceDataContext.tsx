import { PerformanceData } from "types";
import socket from "../socketConnection";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface PerformanceDataContextProps {
  performanceData?: PerformanceData[];
}

const Context = createContext<PerformanceDataContextProps>({
  performanceData: undefined,
});

const PerformanceDataProvider = ({ children }: PropsWithChildren) => {
  const [performanceData, setPerformanceData] = useState<{
    [key: string]: PerformanceData;
  }>();
  useEffect(() => {
    socket.on("performanceData", (data: PerformanceData) => {
      setPerformanceData((prev) => {
        if (!prev) return { [data.macAddress]: data };
        return { ...prev, [data.macAddress]: data };
      });
    });

    socket.on(
      "isConnected",
      (data: {
        machineMacAdress?: string;
        reason: string;
        isConnected: boolean;
      }) => {
        if (data.machineMacAdress) {
          const performanceDataCopy = { ...performanceData };
          // @ts-ignore
          performanceDataCopy[data.machineMacAdress] = data;
          setPerformanceData(performanceDataCopy);
        }
      }
    );
    socket.on("connect_error", (err) => {
      console.log(err);
      alert("Connection Error");
    });
  }, []);

  return (
    <Context.Provider
      value={{
        performanceData: Object.values(performanceData || {}),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as PerformanceDataContext, PerformanceDataProvider };
