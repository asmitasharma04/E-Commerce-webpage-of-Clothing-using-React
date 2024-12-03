



// import './App.css';
// // import './Components/Contact.css';
// import Navbar from './Components/Navbar/Navbar';
// // import HeroSection from './Components/HeroSection';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shop from './Pages/Shop';
// import SummerSale from './Components/SummerSale';
// import Contact from './Components/Contact';
// import Chatbot from './Components/Chatbot';
// import Blog from './Components/Blog';
// import Services from './Components/Services';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens1.png';
// import women_banner from './Components/Assets/banner_women1.png';
// import kid_banner from './Components/Assets/banner_kids1.png';
// import PaymentForm from './Components/Payment';  


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={
//             <>
//               <Shop />
//              <SummerSale/>
//               <Blog />
//               <Services/>
//               <Contact /> 
//               <Chatbot />
            
//             </>
//           } />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//           <Route path='/payment' element={<PaymentForm />} /> {/* Add route for PaymentForm */}
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;































import React, { useState } from 'react';
import './App.css'; // Your main styles
import Navbar from './Components/Navbar/Navbar'; // Navbar with Login/Logout functionality
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import SummerSale from './Components/SummerSale';
import Contact from './Components/Contact';
import Chatbot from './Components/Chatbot';
import Blog from './Components/Blog';
import Services from './Components/Services';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens1.png';
import women_banner from './Components/Assets/banner_women1.png';
import kid_banner from './Components/Assets/banner_kids1.png';
import PaymentForm from './Components/PaymentForm';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle user login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Pass isLoggedIn and onLogout to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <Routes>
          <Route path='/' element={
            <>
              <Shop />
              <SummerSale />
              <Blog />
              <Services />
              <Contact />
              <Chatbot />
            </>
          } />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          
          {/* Conditionally render LoginSignup if not logged in */}
          <Route path='/login' element={<LoginSignup onLogin={handleLogin} />} />

          {/* Add route for PaymentForm */}
          <Route path='/payment' element={<PaymentForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;










































// import React, { useState } from 'react';
// import './App.css'; // Your main styles
// import Navbar from './Components/Navbar/Navbar'; // Navbar with Login/Logout functionality
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shop from './Pages/Shop';
// import SummerSale from './Components/SummerSale';
// import Contact from './Components/Contact';
// import Chatbot from './Components/Chatbot';
// import Blog from './Components/Blog';
// import Services from './Components/Services';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens1.png';
// import women_banner from './Components/Assets/banner_women1.png';
// import kid_banner from './Components/Assets/banner_kids1.png';
// import PaymentForm from './Components/Payment';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Handle user login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Handle user logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         {/* Pass isLoggedIn and onLogout to Navbar */}
//         <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

//         <Routes>
//           <Route path='/' element={
//             <>
//               <Shop />
//               <SummerSale />
//               <Blog />
//               <Services />
//               <Contact />
//               <Chatbot />
//             </>
//           } />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path='/cart' element={<Cart />} />
          
//           {/* Conditionally render LoginSignup if not logged in */}
//           <Route path='/login' element={<LoginSignup onLogin={handleLogin} />} />

//           {/* Add route for PaymentForm */}
//           <Route path='/payment' element={<PaymentForm />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
