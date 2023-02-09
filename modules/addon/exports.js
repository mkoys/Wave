import read from "./database/read.js";
import insert from "./database/insert.js";
import remove from "./database/remove.js";
import update from "./database/update.js";

export default {
    tools: {
        read,
        insert,
        remove,
        update
    }
}