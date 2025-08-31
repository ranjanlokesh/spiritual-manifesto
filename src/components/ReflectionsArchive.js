import React, { useEffect, useState } from 'react';

const ReflectionsArchive = () => {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/reflections')
      .then((res) => res.json())
      .then((data) => setReflections(data.reflections));
  }, []);

  return (
    <section style={{ marginTop: '60px', padding: '20px' }}>
      <h2>📜 Reflections Archive</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
        {reflections.length === 0 ? (
          <p>No reflections yet.</p>
        ) : (
          reflections.map((text, index) => (
            <div key={index} style={{ marginBottom: '12px', padding: '8px', backgroundColor: '#f9f9fc', borderRadius: '4px' }}>
              {text}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ReflectionsArchive;