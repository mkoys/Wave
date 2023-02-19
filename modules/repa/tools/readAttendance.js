import wave from "../../../wave.js";

export default async (filter) => {
    return await wave.addon.readMany("repa", filter);
}