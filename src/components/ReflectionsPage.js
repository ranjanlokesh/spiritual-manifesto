import React, { useEffect, useState } from 'react';

const ReflectionsPage = () => {
  const [reflections, setReflections] = useState([]);
  const [loading, setLoading] = useState(true);     // ✅ Track loading state
  const [error, setError] = useState(null);         // ✅ Track error state

  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const res = await fetch('http://localhost:8000/reflections');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setReflections(Array.isArray(data.reflections) ? data.reflections : []);
      } catch (err) {
        console.error('Failed to fetch reflections:', err);
        setError('⚠️ Unable to load reflections. Backend may be offline.');
      } finally {
        setLoading(false);
      }
    };

    fetchReflections();
  }, []);

  return (
    <section style={{ padding: '20px' }}>
      <h2>📜 Reflections</h2>

      {loading && <p>Loading reflections...</p>}

      {error && (
        <div style={{ marginTop: '20px', color: 'darkred' }}>
          <p>{error}</p>
          <p>Please check your backend server and try again.</p>
        </div>
      )}

      {!loading && !error && (
        <div
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '6px',
          }}
        >
          {reflections.length === 0 ? (
            <p>No reflections yet.</p>
          ) : (
            reflections.map((text, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '12px',
                  padding: '8px',
                  backgroundColor: '#f9f9fc',
                  borderRadius: '4px',
                }}
              >
                {text}
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default ReflectionsPage;