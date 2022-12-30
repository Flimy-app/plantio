import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HomeScreen';
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards />
      <Footer /> */}
    </>
    // <div>
    //   <h1>Home Page</h1>
    //   <br />
    //   <ul>
    //     <li>
    //       {/* Endpoint to route to Home component */}
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       {/* Endpoint to route to About component */}
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       {/* Endpoint to route to Contact Us component */}
    //       <Link to="/contactus">Contact Us</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Home;