import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import { HomePage } from './components/HomePage';
import Reviews from './components/Reviews';
import Review from './components/Review';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/reviews/:review_id" element={<Review />}/>
      </Routes>
    </div>
  );
};

export default App;