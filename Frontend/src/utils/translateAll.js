import { translateText } from "./translate";

export async function translateAll(contentObj, targetLang) {
  const entries = Object.entries(contentObj);
  const translated = {};

  for (const [key, value] of entries) {
    translated[key] = await translateText(value, targetLang);
  }

  return translated;
}
