import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Caleb Ash's Portfolio</h1>
        <p>
          I'm a passionate developer focused on creating impactful and
          innovative software solutions.
        </p>
        <nav>
          <ul className="App-nav">
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
        <section id="projects" className="App-section">
          <h2>Projects</h2>
          <div className="Project">
            <h3>Phillies Twitter Bot</h3>
            <p>
              A Philadelphia Phillies Twitter bot posting daily highlights, game summaries, and other Phillies content during the MLB season.
              Built with Python and various APIs
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
            <h3>Music & Mood Matcher</h3>
            <p>
              An app that matches your mood to a curated music playlist. Built
              with React.
            </p>
            <a
              className="App-link"
              href="https://github.com/calebashw/music-mood-matcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>
        <section id="contact" className="App-section">
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
                href="https://www.linkedin.com/in/calebashw"
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
