// geminiservice.js

export const generateResponse = async (promptText) => {
  try {
    const res = await fetch('http://localhost:8000/generate-gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText }),
    });

    const data = await res.json();

    if (data.response) {
      return data.response;
    } else {
      console.warn("No response received from backend:", data);
      return "⚠️ No response text received.";
    }
  } catch (error) {
    console.error("Backend Gemini API error:", error);
    return "⚠️ Unable to generate response at the moment.";
  }
};