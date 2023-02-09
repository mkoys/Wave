import { nanoid } from "nanoid";

import websocket from "../../source/websocket.js";
import appendSocket from "./tools/appendSocket.js";

export default async () => {
    const realtime = websocket();

    realtime.event("handshake", async (request, socket) => {
        let token = request.headers.authorization;

        if (!token) { return socket.decline() }

        const id = nanoid();

        const result = await appendSocket(token, id);

        if (result) {
            socket.accept()
        } else {
            socket.decline()
        }
    });
}