import React, { useState } from 'react';

const ShareInsight = () => {
  const [insight, setInsight] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8000/submit-insight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ insight }),
      });

      if (response.ok) {
        setSubmitted(true);
        setInsight('');
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Unable to connect to the server.');
    }
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
            required
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
          {error && (
            <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
          )}
        </form>
      ) : (
        <div style={{ marginTop: '20px', color: '#4b0082' }}>
          <p>🙏 Thank you for sharing. Your insight has been received and stored.</p>
        </div>
      )}
    </section>
  );
};

export default ShareInsight;