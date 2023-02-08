import addUser from "../tools/addUser.js";

export default async (req, res) => {
    let data = null;

    try { data = JSON.parse(req.body) }
    catch (error) { return res.json({ error: "Invalid request" }) }

    const result = await addUser(data);

    return res.json(result);
}