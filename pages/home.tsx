import React from 'react'

const Home = () => {
  return (
    <div>
      <nav className="navbar">
    <ul className="nav-links">
      <li><a href="./owner">owner</a></li>
      
      <li><a href="./service">Services</a></li>
      <li><a href="./contact">Contact</a></li>
    </ul>
  </nav>

  <div className="image-container">
    <img src="https://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Sample Image" className="main-image"/>
    <div className="image-description">
      <h1>Make your future bright</h1>
      <p>Coding, also known as computer programming, is how we communicate with computers and tell them what to do. Through coding, professionals can build programs, including websites and apps..</p>
    </div>
  </div>
  <div className="container">
    
    <div className="image-div">
      <img src="https://img.freepik.com/premium-photo/digital-composite-image-young-man-using-computer_1048944-5431448.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Sample Image" className="image"/>
    </div>
    
    
    <div className="text-div">
      <h1>Make your skills better.</h1>
      <p>the knowledge and understanding of languages, frameworks, and architecture that enables a coder to create any digital product..</p>
    </div>
  </div>
  <div className="image-scroll-container">
    <div className="image-wrapper">
      <img src="https://img.freepik.com/free-photo/indian-man-programmers-testing-application-security-developed_231208-3632.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Image 1" className="scrolling-image"/>
      <img src="https://img.freepik.com/free-photo/person-working-animation-porject_23-2149269887.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Image 2" className="scrolling-image"/>
      <img src="https://img.freepik.com/premium-photo/side-view-focused-male-programmer_280538-1358.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Image 3" className="scrolling-image"/>
      <img src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code_146671-18938.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid" alt="Image 4" className="scrolling-image"/>
    </div>
  </div>


  <footer className="footer">
    <div className="footer-container">

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

     
      <div className="social-media">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#" className="social-icon">📘</a></li>
          <li><a href="#" className="social-icon">🐦</a></li>
          <li><a href="#" className="social-icon">📸</a></li>
          <li><a href="#" className="social-icon">🎥</a></li>
        </ul>
      </div>

 
      <div className="footer-info">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Home;
