import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

// ✅ Exported function
export const generateResponse = async (promptText) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });

    // ✅ Extract text from the first candidate's first part
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "⚠️ No response text received.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "⚠️ Unable to generate response at the moment.";
  }
};