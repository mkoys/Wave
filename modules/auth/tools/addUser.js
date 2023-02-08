import insert from "../database/insert.js";
import read from "../database/read.js";

import createUser from "../library/createUser.js";
import processData from "../library/processData.js";

export default async (data) => {
    const registerData = await read("data", { name: "register" });

    if (registerData === false) { { error: "No register data were found" } }

    const checkErrors = await processData(registerData.rules, data);
    if (checkErrors.errors.length) { return checkErrors }

    const processErrors = await processData(registerData.process, data);
    if (processErrors.errors.length) { return processErrors }

    const user = await createUser(data);

    await insert("users", user);

    return { success: "User created" }
}