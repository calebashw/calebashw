import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caleb Ash</h1>
        <p>
          Passionate student and developer who enjoys problem-solving and creating
        </p>
        <nav>
          <ul className="App-nav">
            <li>
              <a className="App-link" href="#bio"> 
                Bio
              </a>
            </li>
            <li>
              <a className="App-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="App-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="before-contact">
          <section id="bio" className="bio-section">
            <h2>About Me</h2>
            <p>
              I'm Caleb Ash, a student at Dartmouth College studying computer science and economics. I'm interested in
              full-stack development, software engineering, and AI. Also love sports (go birds) and running. From Philadelphia and proud.
            </p>
          </section>
          <section id="projects" className="App-section">
            <h2>Projects</h2>
            <div className="Project">
              <h3>Phillies Twitter Bot</h3>
              <p>
                A Philadelphia Phillies Twitter bot posting daily highlights, game summaries, and other Phillies content during the MLB season.
                Built with Python and various APIs.
              </p>
              <a
                className="App-link"
                href="https://github.com/calebashw/philstwitterbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <p> </p>
              <a 
                href="https://x.com/philstweetbot" 
                className="App-link" 
                target="_blank"
                rel="noopener noreferrer"
              >
                View on X
              </a>
            </div>
            <div className="Project">
              <h3>Medilink</h3>
              <p>
                MediLink is a funcitoning EMR, allowing for appointments scheduling, check ins, appointment notes, and other necessary funcitons for a doctors office.
              </p>
              <a
                className="App-link"
                href="https://brunchlabs.notion.site/Projects-82418b46babc4133bdee9f35f7d164be?p=c0234435571f4924b23366ffe9bd1b17&pm=c"
                target="_blank"
                rel="noopener noreferrer"
              >
                See demo/results
              </a>
            </div>
            <div className="Project">
              <h3>Tiny Search Engine</h3>
              <p>
                A crawler, indexer, and querier, all built in C that with provided data can act as a search engine.
              </p>
              {/* <a
                className="App-link"
                href="https://github.com/calebashw/music-mood-matcher"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a> */}
            </div>
            <div className="Project">
              <h3>Nuggets Game</h3>
              <p>
                Multiplayer terminal-based game with a functioning client and server written in C. Personally responsible for creating the client.
              </p>
              {/* <a
                className="App-link"
                href="https://github.com/calebashw/music-mood-matcher"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a> */}
            </div>
          </section>
          <section id="coursework" className="App-section">
            <h2>
              Coursework
            </h2>
            <div class="accordion">
              <div class="accordion-item">
                <button class="accordion-header">Intro to Programming and Computation (CS1)</button>
                <div class="accordion-content">
                  Topics: Python, fundamental programming skills, introduction to classes and objects.
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header">Problem Solving via Object-Oriented Programming</button>
                <div class="accordion-content">
                  Topics: Java, OOP, Data Structures, Algorithms
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header">Software Design & Implementation</button>
                <div class="accordion-content">
                  Topics: Software Design and Documentation, C, Debugging and Testing, Git
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header">Intro to Applied Computer Science</button>
                <div class="accordion-content">
                  Topics: Linear Algebra, Intro to ML
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header">Machine Learning and Statistical Data Analysis</button>
                <div class="accordion-content">
                  Topics: Python, Jupyter Notebooks, ML, Stastical Modeling
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-header">Full-Stack Web Development</button>
                <div class="accordion-content">
                  Topics: React, Node.js, State Management, MongoDB, JavaScript, REST APIs, CRUD, etc.
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>
            I'm currently open to opportunities! Feel free to reach out to me:
          </p>
          <ul className="Contact-list">
            <li>
              Email:{" "}
              <a href="mailto:calebwilliam@comcast.net">calebwilliam@comcast.net</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="App-link"
                href="https://www.linkedin.com/in/caleb-ash-606312247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My LinkedIn Profile
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="App-link"
                href="https://github.com/calebashw"
                target="_blank"
                rel="noopener noreferrer"
              >
                My GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
