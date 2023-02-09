import router from "./router.js";
import realtime from "./realtime.js";

import registerUser from "./tools/registerUser.js";
import loginUser from "./tools/loginUser.js";
import logoutUser from "./tools/logoutUser.js";
import addUser from "./tools/addUser.js";

import addSession from "./tools/addSession.js";

export default {
    router,
    realtime,
    tools: {
        registerUser,
        loginUser,
        addUser,
        addSession,
        logoutUser
    }
}