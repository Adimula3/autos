
import './App.css';
import Header from './component/header';
import Home from './pages/home';
import AutoListings from './pages/autoListings';
import ProductDetails from './pages/productDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
           <Router>
              <Routes>
                 <Route path="/" element={<Home />}  />
                 <Route path='/listings' element={<AutoListings />} />
                 <Route path='/productDetails/:productId' element={<ProductDetails />} />
              </Routes>
           </Router>
    </div>
  );
}

export default App;
