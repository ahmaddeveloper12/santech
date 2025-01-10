import React from 'react'

const index = () => {
  return (
    <div>
      <div className="dashboard-container">
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Santech</h2>
      </div>
     
    </div>

    <div className="main-content">
      <div className="content-header">
        <h1>Welcome to our company</h1>
      </div>
<br />
<br />
      <div className="content-body">
        <p>Welcome to our company , For more information click the button, Hope you enjoy our company;</p>
        <br />
        <br />
        <a href="./home" className="next-page-btn">Next Page</a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default index;
