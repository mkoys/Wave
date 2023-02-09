import router from "./router.js";

import registerUser from "./tools/registerUser.js";
import loginUser from "./tools/loginUser.js";
import logoutUser from "./tools/logoutUser.js";
import addUser from "./tools/addUser.js";

import addSession from "./tools/addSession.js";

export default {
    router,
    tools: {
        registerUser,
        loginUser,
        addUser,
        addSession,
        logoutUser
    }
}