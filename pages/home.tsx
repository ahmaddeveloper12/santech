import React from 'react'

const Home = () => {
  return (
    <div>
 <br />
 <br />

 <br />
 <br />
 <br />
 <br /><br />
 <br />
 <br />
 <br />
 <br />
 <br />

 <br />
 <br />
 <br />
 <br /><br />
 <br />
 <br />
 <br />
 
<header>

        <nav className="navbar">
            <div className="logo">
                <a href="#">santech</a>
            </div>
            <ul className="nav-links">
                <li><a href="./owner">owner</a></li>
                <li><a href="./service">Services</a></li>
                <li><a href="./contact">Contact</a></li>
            </ul>
            {/* <div className="search-container">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </div> */}
        </nav>
    </header>
      <main>
        <div className="container">
          
            <h1>Welcome to Our Beautiful Site</h1>
            {/* <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}
        </div>
    </main>

    <section className="hero">
        <div className="hero-content">
          
            <h2>Transform Your Ideas into Reality</h2>
            <p>We specialize in creating beautiful and functional websites that represent your brand.</p>

            <button>Get Started</button>
        </div>
    </section>

    <section className="features">
        <div className="container">
            <h2>Our Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <h3>Responsive Design</h3>
                    <p>Our designs look great on all devices, ensuring a seamless experience.</p>
                </div>
                <div className="feature-card">
                    <h3>SEO Optimized</h3>
                    <p>We build websites with search engines in mind to help you rank higher.</p>
                </div>
                <div className="feature-card">
                    <h3>Fast Load Times</h3>
                    <p>Speed is key! We make sure your website loads in the blink of an eye.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2025 Beautiful Home Page. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Home;
