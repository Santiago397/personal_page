import './styles/App.css'
import React from 'react'
import PublicLayout from './layouts/PublicLayout';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={'/'} element={<Index />} />
            <Route path={'/'} element={<About />}/>
          </Route>
            <Route path={'*'} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
