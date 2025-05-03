import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Tatka Restaurant</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/menu" element={<div>Menu Page</div>} />
          <Route path="/admin" element={<div>Admin Dashboard</div>} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Tatka Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;