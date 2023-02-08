import wave from "../../../wave.js";

import createSession from "../library/createSession.js";

export default async (id) => {
    const session = createSession(id);
    wave.addon.insert("sessions", session);
    return session;
}