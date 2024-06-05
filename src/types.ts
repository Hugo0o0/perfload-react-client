export interface PerformanceData {
  isConnected: boolean;
  machineMacAdress: string;
  reason?: string;
  cpuLoad: number;
  cpuModel: string;
  cpuSpeed: number;
  freeMemory: number;
  macAddress: string;
  memoryUsage: number;
  numberOfCpuCores: number;
  osType: string;
  osUptime: number;
  totalMemory: number;
  usedMemory: number;
}
