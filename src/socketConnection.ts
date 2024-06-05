import io from "socket.io-client";

const socket = io(process.env.REACT_APP_SERVER_URL!, {
  auth: {
    token: process.env.REACT_APP_CLIENT_PASSWORD,
  },
});

export default socket;
