import React, { useState } from 'react';

const ShareInsight = () => {
  const [insight, setInsight] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: Send insight to backend or store locally
  };

  return (
    <section className="share-insight" style={{ marginTop: '60px', padding: '20px' }}>
      <h2>📝 Share Your Insight</h2>
      <p>
        This space honors your reflections. Whether it's a question, a realization, or a moment of clarity — your voice matters. Share what moves you.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={insight}
            onChange={(e) => setInsight(e.target.value)}
            placeholder="Write your reflection here..."
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '12px',
              resize: 'vertical',
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
            Submit Reflection
          </button>
        </form>
      ) : (
        <div style={{ marginTop: '20px', color: '#4b0082' }}>
          <p>🙏 Thank you for sharing. Your insight will help shape this evolving space.</p>
        </div>
      )}
    </section>
  );
};

export default ShareInsight;