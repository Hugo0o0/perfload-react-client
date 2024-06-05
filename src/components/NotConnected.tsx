import React, { FC } from "react";

interface NotConnectedProps {
  macAddress: string;
  reason: string;
}
const NotConnected: FC<NotConnectedProps> = ({ macAddress, reason }) => {
  return (
    <div>
      <h1>Computer with mac address: {macAddress} is not connected</h1>
      <h3>Reason: {reason}</h3>
    </div>
  );
};

export default NotConnected;
