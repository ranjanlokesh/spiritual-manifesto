import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { generateResponse } from '../services/GeminiService';

const LivingArchivePage = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await generateResponse(userInput);
    setAiResponse(response);
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>🧠 Living Archive</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your insight or question..."
          rows="6"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '1em',
            marginBottom: '12px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4b0082',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Ask AI
        </button>
      </form>

      {aiResponse && (
        <section className="ai-response">
          <h2>AI Reflection</h2>
          <ReactMarkdown>{aiResponse}</ReactMarkdown>
        </section>
      )}
    </section>
  );
};

export default LivingArchivePage;