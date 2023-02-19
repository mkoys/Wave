import wave from "../../../wave.js";

export default async ({token}) => {
    
    const session = await wave.addon.read("sessions", {token});
    
    if(!session) {
        return false;
    }

    const user = await wave.addon.read("users", {id: session.id});

    return user;
}