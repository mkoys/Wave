import router from "./router.js";

import registerUser from "./tools/registerUser.js";
import loginUser from "./tools/loginUser.js";

import addSession from "./tools/addSession.js";

export default {
    router,
    tools: {
        registerUser,
        loginUser,
        addSession
    }
}