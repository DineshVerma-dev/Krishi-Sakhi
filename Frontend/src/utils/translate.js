export async function translateText(text, targetLang) {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // not process.env in Vite!
  if (!apiKey) throw new Error("Missing Google API key");

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, target: targetLang }),
    }
  );

  if (!res.ok) throw new Error("Translation failed");
  const data = await res.json();
  return data.data.translations[0].translatedText;
}
