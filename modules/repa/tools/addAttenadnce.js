import wave from "../../../wave.js";

export default async (data) => {
   await wave.addon.insert("repa", data);
}