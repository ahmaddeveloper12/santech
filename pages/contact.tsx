import Image from 'next/image';  // You need to use this for optimized image loading
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="company-card">
        <div className="card-header">
          {/* Use the Image component for optimized image loading */}
          <Image
            src="https://img.freepik.com/premium-photo/vector-logo-letter-s-color-silhouette-dark-backgroundquot_1025557-3611.jpg?ga=GA1.1.1415032807.1735110773&semt=ais_hybrid"
            alt="Company Logo"
            className="company-logo"
            width={150}  // Add appropriate width
            height={150} // Add appropriate height
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
