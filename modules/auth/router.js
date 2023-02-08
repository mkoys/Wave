import post from "@mkoys/post";

import register from "./api/register.js";
import login from "./api/login.js";

const router = post.app();

router.post("/register", register);
router.post("/login", login);

export default router;