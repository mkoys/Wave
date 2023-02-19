import post from "@mkoys/post";

import insertAttendance from "./api/insertAttendance.js";
import getAttendance from "./api/getAttendance.js";

const router = post.app();

router.post("/insert", insertAttendance);
router.post("/read", getAttendance);

export default router;