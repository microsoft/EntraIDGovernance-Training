import React, { useEffect } from 'react';
import Root from '@theme-original/Root';

export default function CustomRoot(props) {
useEffect(() => {
  const acceptButton = document.getElementById('consent-button');
  const rejectButton = document.getElementById('reject-button');

  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      window.clarity('consentv2', {
        ad_storage: 'granted',
        analytics_storage: 'granted'
      });
      document.getElementById('consent-banner').style.display = 'none';
    });
  }

  if (rejectButton) {
    rejectButton.addEventListener('click', () => {
      window.clarity('consentv2', {
        ad_storage: 'denied',
        analytics_storage: 'denied'
      });
      document.getElementById('consent-banner').style.display = 'none';
    });
  }
}, []);

  return (
    <>
<div
  id="consent-banner"
  style={{
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '1rem 1.5rem',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    fontSize: '0.95rem',
    color: '#333',
    zIndex: 1000,
    maxWidth: '320px',
    textAlign: 'left'
  }}
>
  <p style={{ marginBottom: '0.75rem' }}>
    This site uses cookies for analytics and user experience. Do you accept?
  </p>
  <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
    <button
      id="consent-button"
      style={{
        backgroundColor: '#0066cc',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Accept
    </button>
    <button
      id="reject-button"
      style={{
        backgroundColor: '#ccc',
        color: '#333',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Reject
    </button>
  </div>
</div>
      <Root {...props} />
    </>
  );
}