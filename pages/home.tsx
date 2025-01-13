import React from 'react';
import Image from 'next/image';  // Import the Image component from Next.js

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="#">SanTech</a>
        </div>
        <ul className="nav-links">
          <li><a href="./owner">Owner</a></li>
          <li><a href="./service">Services</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
      </nav>
    
      <div className="background-div">
        <div className="content">
          <h1>Welcome to My Website</h1>
          <p>One day = Day one</p>
        </div>
      </div>

      <div className="container">
        <div className="image-div">
          <Image 
            src="https://img.freepik.com/free-photo/male-teacher-doing-english-lesson-online-his-students_23-2148963020.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_tags_boosted"
            alt="Image"
            width={500}  // Add width for the Image component
            height={300} // Add height for the Image component
          />
        </div>
        <div className="text-div">
          <h1>Welcome to My Website</h1>
          <p>A call to action (CTA) in your meta description will compel people to click through to your page.</p>
        </div>
      </div>
    
      <div className="scrolling-container">
        <Image 
          src="https://img.freepik.com/free-photo/young-beautiful-female-casual-shirt-jeans-looking-folder-looking-gloomy-front-view_176474-111854.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid"
          alt="Scrolling Image"
          className="scrolling-image"
          width={500}
          height={300}
        />
        <Image 
          src="https://img.freepik.com/free-photo/man-using-laptop-office-doing-document-analysis_1150-26847.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_tags_boosted"
          alt="Scrolling Image"
          className="scrolling-image"
          width={500}
          height={300}
        />
      </div>

      <div className="content">
        <h1>See You Again Inshallah</h1>
        <p>SanTech</p>
      </div>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
