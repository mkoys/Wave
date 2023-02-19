import wave from "../../../wave.js";
import readAttendance from "../tools/readAttendance.js";

export default async (req, res) => {
    let data = null;

    let token = req.headers.authorization;
    if(!token) {
        return res.json({error: "Invalid token"});
    }else {
        token = token.split(" ")[1];
    }

    try { data = JSON.parse(req.body) }
    catch (error) { return res.json({ error: "Invalid request" }) }
    const user = await wave.auth.getUser({ token });

    if(user) {
        const result = await readAttendance(data);
        const found = await result.toArray();
        found.map(value => delete value._id);
        res.json(found);
    }else {
        res.json({ message: "Not authorized" });
    }
}