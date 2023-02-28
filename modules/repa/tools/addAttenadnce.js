import wave from "../../../wave.js";

export default async (data) => {
   const filter = {date: data.date};
   await wave.addon.remove("repa", filter);
   if(data.content.length != 0) {
      await wave.addon.insert("repa", data);
   }
}