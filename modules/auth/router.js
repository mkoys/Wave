import post from "@mkoys/post";
import register from "./api/registerUser.js";

const router = post.app();

router.post("/register", register);

export default router;