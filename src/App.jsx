import './App.css';
import { useEffect } from 'react';

function App() {
  // Function to handle accordion functionality
  useEffect(() => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(content => {
          if (content !== header.nextElementSibling) {
            content.classList.remove('active');
          }
        });
        
        // Toggle the clicked accordion item
        const content = header.nextElementSibling;
        content.classList.toggle('active');
      });
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Caleb Ash</h1>
          <p className="header-tagline">
            Software Developer & Student
          </p>
          
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#about" className="nav-link">About</a>
              </li>
              <li>
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li>
                <a href="#coursework" className="nav-link">Coursework</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                I'm Caleb Ash, a student at Dartmouth College studying computer science and economics. 
                I'm interested in full-stack development, software engineering, and AI. 
                Also love sports (go birds) and running. From Philadelphia and proud.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Phillies Twitter Bot</h3>
                <p>
                  A Philadelphia Phillies Twitter bot posting daily highlights, game summaries, and other Phillies content during the MLB season.
                  Built with Python and various APIs.
                </p>
                <div className="project-links">
                  <a
                    className="btn"
                    href="https://github.com/calebashw/philstwitterbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://x.com/philstweetbot" 
                    className="btn" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on X
                  </a>
                </div>
              </div>

              <div className="project-card">
                <h3>Medilink</h3>
                <p>
                  MediLink is a functioning EMR, allowing for appointments scheduling, check-ins, appointment notes, and other necessary functions for a doctor's office.
                </p>
                <div className="project-links">
                  <a
                    className="btn"
                    href="https://brunchlabs.notion.site/Projects-82418b46babc4133bdee9f35f7d164be?p=c0234435571f4924b23366ffe9bd1b17&pm=c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </div>
              </div>

              <div className="project-card">
                <h3>Tiny Search Engine</h3>
                <p>
                  A crawler, indexer, and querier, all built in C that with provided data can act as a search engine.
                </p>
                {/* <div className="project-links">
                  <a
                    className="btn"
                    href="https://github.com/calebashw/tiny-search-engine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div> */}
              </div>

              <div className="project-card">
                <h3>Nuggets Game</h3>
                <p>
                  Multiplayer terminal-based game with a functioning client and server written in C. Personally responsible for creating the client.
                </p>
                {/* <div className="project-links">
                  <a
                    className="btn"
                    href="https://github.com/calebashw/nuggets-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section id="coursework" className="section coursework-section">
          <div className="container">
            <h2 className="section-title">Coursework</h2>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-header">Intro to Programming and Computation (CS1)</button>
                <div className="accordion-content">
                  <p>Topics: Python, fundamental programming skills, introduction to classes and objects.</p>
                </div>
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header">Problem Solving via Object-Oriented Programming</button>
                <div className="accordion-content">
                  <p>Topics: Java, OOP, Data Structures, Algorithms</p>
                </div>
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header">Software Design & Implementation</button>
                <div className="accordion-content">
                  <p>Topics: Software Design and Documentation, C, Debugging and Testing, Git</p>
                </div>
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header">Intro to Applied Computer Science</button>
                <div className="accordion-content">
                  <p>Topics: Linear Algebra, Intro to ML</p>
                </div>
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header">Machine Learning and Statistical Data Analysis</button>
                <div className="accordion-content">
                  <p>Topics: Python, Jupyter Notebooks, ML, Statistical Modeling</p>
                </div>
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header">Full-Stack Web Development</button>
                <div className="accordion-content">
                  <p>Topics: React, Node.js, State Management, MongoDB, JavaScript, REST APIs, CRUD, etc.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-header">Discrete Mathematics</button>
                <div className="accordion-content">
                  <p>Topics: Proofs, Graph Theory, Combinatorics, Number Theory, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-intro">
              I'm currently open to opportunities! Feel free to reach out to me:
            </p>
            <div className="contact-links">
              <a href="mailto:calebwilliam@comcast.net" className="contact-link">
                <span className="contact-icon">✉️</span>
                calebwilliam@comcast.net
              </a>
              <a
                href="https://www.linkedin.com/in/caleb-ash-606312247/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/calebashw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💻</span>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Caleb Ash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
