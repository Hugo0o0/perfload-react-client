import { PerformanceDataContext } from "components/PerformanceDataContext";
import { useContext } from "react";

const usePerformanceData = () => useContext(PerformanceDataContext);

export default usePerformanceData;
