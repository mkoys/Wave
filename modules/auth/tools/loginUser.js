import read from "../database/read.js";

import processData from "../library/processData.js";
import addSession from "../tools/addSession.js";

export default async (data) => {
    const loginData = await read("data", { name: "login" });

    if (loginData === false) { return { errors: ["No login data were found"] } }

    const dataErrors = await processData(loginData.rules, data);
    if (dataErrors.errors.length) { return dataErrors }

    const processErrors = await processData(loginData.process, data);
    if (processErrors.errors.length) { return processErrors }

    Object.keys(data).map((value) => data[value] = new RegExp(data[value], "i"));

    const user = await read("users", data);
    const session = await addSession(user.id);

    return session;
}