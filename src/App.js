import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import { HomePage } from './components/HomePage';
import Reviews from './components/Reviews';
import Review from './components/Review';
import { useState } from 'react';
import CategoryPage from './components/CategoryPage';



function App() {

  const [newUsername, setUsername] = useState('jessjelly');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/reviews/:review_id" element={<Review username={newUsername}/>}/>
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
