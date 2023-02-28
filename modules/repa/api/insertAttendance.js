import wave from "../../../wave.js";
import addAttenadnce from "../tools/addAttenadnce.js";

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
        data = {...data, id: user.id}
        await addAttenadnce(data);
        res.json({ message: "ok" });
    }else {
        res.json({ message: "Not authorized" });
    }
}