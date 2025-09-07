import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { generateResponse } from '../services/GeminiService';

const LivingArchivePage = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // ✅ New error state

  useEffect(() => {
    const fetchArchive = async () => {
      try {
        const res = await fetch('http://localhost:8000/get-reflections');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setArchive(Array.isArray(data.reflections) ? data.reflections : []);
      } catch (err) {
        console.error('Failed to load archive:', err);
        setError('⚠️ Unable to load reflections. Backend may be offline.');
      } finally {
        setLoading(false);
      }
    };

    fetchArchive();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await generateResponse(userInput);
    setAiResponse(response);

    const newEntry = { prompt: userInput, response };

    try {
      await fetch('http://localhost:8000/save-reflection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      });

      setArchive(prev => Array.isArray(prev) ? [newEntry, ...prev] : [newEntry]);
    } catch (err) {
      console.error('Failed to save reflection:', err);
      setError('⚠️ Unable to save reflection. Backend may be offline.');
    }

    setUserInput('');
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
            borderRadius: '6px',
            border: '1px solid #ccc',
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
            cursor: 'pointer',
          }}
        >
          Ask AI
        </button>
      </form>

      {aiResponse && (
        <section className="ai-response" style={{ marginTop: '30px' }}>
          <h3>🔍 Latest Reflection</h3>
          <ReactMarkdown>{aiResponse}</ReactMarkdown>
        </section>
      )}

      {error && (
        <div style={{ marginTop: '30px', color: 'darkred' }}>
          <p>{error}</p>
          <p>Please check your backend server and try again.</p>
        </div>
      )}

      {!loading && !error && archive.length > 0 && (
        <section className="ai-archive" style={{ marginTop: '40px' }}>
          <h2>🗂️ AI Reflection Archive</h2>
          {archive.map((entry, index) => (
            <div key={index} className="archive-entry" style={{ marginBottom: '30px' }}>
              <h4>📝 Insight:</h4>
              <p style={{ fontStyle: 'italic', color: '#555' }}>{entry.prompt}</p>
              <h4>🔍 Reflection:</h4>
              <ReactMarkdown>{entry.response}</ReactMarkdown>
              <hr style={{ marginTop: '20px', borderColor: '#ddd' }} />
            </div>
          ))}
        </section>
      )}

      {!loading && !error && archive.length === 0 && (
        <p style={{ marginTop: '20px', color: '#777' }}>No reflections saved yet.</p>
      )}
    </section>
  );
};

export default LivingArchivePage;