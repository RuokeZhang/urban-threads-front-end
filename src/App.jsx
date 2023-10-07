import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';  // 注意大小写
import NavBar from './components/Navbar';
import About from './components/about';
import Cart from './components/cart';
import SampleFooter from './components/footer';
import Home from './components/home';
import Header from './components/header';


function App() {
    return (
        <div className="App">  {/* 修正 className 的格式 */}
            <Router>
                <Header />
                <NavBar /> {/* Adding the NavBar component */}
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/purchase" element={<Purchase />} />
                        <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
                        <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
                        <Route path="/purchase/viewOrder" element={<ViewOrder />} />
                        <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
            <SampleFooter />
        </div>
    );
}

export default App;
