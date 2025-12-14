import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        width: '400px'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>Company</h1>
        <h2 style={{ color: '#666', marginBottom: '30px', fontWeight: 'normal' }}>
          Sign in to your account to continue
        </h2>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>
            Email
          </label>
          <input 
            type="email" 
            placeholder="info@mail.com"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>
            Password
          </label>
          <input 
            type="password" 
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <button 
          style={{
            width: '100%',
            padding: '14px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Login clicked!')}
        >
          Log in
        </button>
        
        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: '#f7fafc',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666'
        }}>
          <p>✅ React работает!</p>
          <p>Тестовые данные:</p>
          <p>• user@example.com / Password123</p>
          <p>• admin@example.com / Admin123</p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);