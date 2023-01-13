import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import { HomePage } from './components/HomePage';
import Reviews from './components/Reviews';
import Review from './components/Review';
import { useContext, useState } from 'react';
import CategoryPage from './components/CategoryPage';
import LoginPage from './components/LoginPage';
import { UserContext } from './contexts/User';



function App() {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/reviews/:review_id" element={<Review />}/>
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
