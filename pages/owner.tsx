import React from 'react'

const owner = () => {
  return (
    <div>
      <div className="owner-info-container">
    <div className="profile-card">
     
      <div className="profile-img">
        <img src="https://avatars.githubusercontent.com/u/179399816?v=4" alt="Owner Picture" className="owner-image"/>
      </div>
      <div className="profile-details">
        <h1 className="owner-name">Ahmad khan</h1>
        <p className="owner-bio">
          Hello, I am Ahmad raza khan, the founder and owner of santech company. Passionate about technology, design, and creating innovative solutions. I love meeting new people and collaborating on exciting projects!
        </p>
        <ul className="owner-contact">
          <li><strong>Email:</strong> codewithahmad343@gmail.com</li>
          <li><strong>Phone:</strong> 03111402566</li>
       
        </ul>
      </div>
    </div>
  </div>
    </div>
  )
}

export default owner;
