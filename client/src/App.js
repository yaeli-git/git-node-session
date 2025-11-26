import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AdminDashboardPage from "./pages/AdminDashboardPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProductsPage from "./pages/ProductsPage"
import RegisterPage from "./pages/RegisterPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/AdminDashboardPage" element={<AdminDashboardPage />}/>
             <Route path="/LoginPage" element={<LoginPage />}/>
             <Route path="/NotFoundPage" element={<NotFoundPage />}/>
             <Route path="/ProductDetailsPage" element={<ProductDetailsPage />}/>
             <Route path="/ProductsPage" element={<ProductsPage />}/>
             <Route path="/RegisterPage" element={<RegisterPage />}/>
             <Route path="/ShoppingCartPage" element={<ShoppingCartPage />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
