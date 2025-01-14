import Image from 'next/image'; // Import Image for optimized image loading
import React from 'react'

const Contact = () => {
  return (
    <div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9583800882921435"
     crossOrigin="anonymous"></script>
      <div className="company-card">
        <div className="card-header">
          {/* Use the Image component to display an image */}
          <Image
            src="/path/to/your/image.jpg" // Provide the image source here
            alt="Company Logo"
            width={150} // Set the width for the image
            height={150} // Set the height for the image
          />
          <h1 className="company-name">Santech</h1>
        </div>

        <div className="card-body">
          <p className="company-description">
            San tech is a leading technology company that specializes in software development, IT consulting, and digital transformation services. We create innovative solutions to help businesses grow and succeed in the digital world.
          </p>

          <div className="company-contact">
            <h2>Contact Us</h2>
            <p><strong>Email:</strong> apnalago6677@gmaiil.com</p>
            <p><strong>Phone:</strong> 03111402566</p>
          </div>
        </div>

        <div className="card-footer">
          <p>&copy; 2025 Santech. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
