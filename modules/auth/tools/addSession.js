import insert from "../database/insert.js";;

import createSession from "../library/createSession.js";

export default async (id) => {
    const session = createSession(id);
    insert("sessions", session);
    return session;
}