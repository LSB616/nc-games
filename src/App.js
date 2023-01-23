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
import UserPage from './components/UserPage';
import LoadingPage from './components/LoadingPage';
import Footer from './components/Footer';
import ReviewAdder from './components/ReviewAdder';
import ReviewEditPage from "./components/ReviewEditPage";
import CreateAccount from './components/CreateAccount';
import Test from './components/Test';



function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/reviews/:review_id" element={<Review />}/>
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="/users" element={<LoadingPage />} />
        <Route path="/reviews/add-review" element={<ReviewAdder />} />
        <Route path="/reviews/:review_id/edit-review" element={<ReviewEditPage />} />
        <Route path="/create-account" element={<CreateAccount />}/>
        <Route path="/test-page" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
