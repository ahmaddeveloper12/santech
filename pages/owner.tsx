import React from 'react';
import Image from 'next/image';  // Import the Image component from Next.js

const Owner = () => {
  return (
    <div>
      <div className="owner-info-container">
        <div className="profile-card">
          <div className="profile-img">
            {/* Replace <img> with <Image> for optimization */}
            <Image 
              src="https://avatars.githubusercontent.com/u/179399816?v=4"
              alt="Owner Picture"
              className="owner-image"
              width={150}  // Specify the width for the Image component
              height={150} // Specify the height for the Image component
            />
          </div>
          <div className="profile-details">
            <h1 className="owner-name">Ahmad Khan</h1>
            <p className="owner-bio">
              Hello, I am Ahmad Raza Khan, the founder and owner of Santech Company. Passionate about technology, design, and creating innovative solutions. I love meeting new people and collaborating on exciting projects!
            </p>
            <ul className="owner-contact">
              <li><strong>Email:</strong> codewithahmad343@gmail.com</li>
              <li><strong>Phone:</strong> 03111402566</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
