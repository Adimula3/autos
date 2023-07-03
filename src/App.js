
import './App.css';
import Home from './pages/home';
import AutoListings from './pages/autoListings';
import ProductDetails from './pages/productDetails';
import Contact from './pages/contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from './admin/auth/login';
import AdminRegister from './admin/auth/register';
import AdminDashboard from './admin/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/listings' element={<AutoListings />} />
          <Route path='/productDetails/:productId' element={<ProductDetails />} />
          <Route path='/contact' element={<Contact />} />

          {/* route to access admin login
          sample url for the login page = http://localhost:3000/admin/login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />

          {/* dynamic route for admin dashboard
          sample url for the dashboard home: = http://localhost:3000/admin/dashboard/home */}
          <Route path="/admin/dashboard/:dash_url" element={<AdminDashboard />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
