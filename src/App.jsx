import './styles/App.css'
import React from 'react'
import PublicLayout from './layouts/PublicLayout';
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={'/'} element={<Index />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
