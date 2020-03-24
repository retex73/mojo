import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Layout} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
