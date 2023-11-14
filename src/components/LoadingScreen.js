import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import Logo from "../assets/logo.png"

const LoadingScreen = () => {
  return (
    <div className="loading-screen" style={{ backgroundColor: '#fff' }}> {/* Set your desired background color */}
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <img src={Logo} alt="Logo" className="mb-4" /> {/* Replace with the path to your logo */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
