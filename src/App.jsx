import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved dark mode preference or default to system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update document class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="gradient-bg text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Caleb Ash
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-slide-up">
              Software Developer & Student
            </p>
            
            {/* Navigation and Dark Mode Toggle */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <nav className="flex space-x-8">
                {['About', 'Projects', 'Coursework', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 md:p-12 shadow-lg transition-colors duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CA
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-center max-w-3xl mx-auto">
                I'm Caleb Ash, a SWE intern at the Chicago Blackhawks and a student at Dartmouth College 
                studying computer science and economics. I'm passionate about full-stack development, 
                software engineering, and AI. When I'm not coding, you'll find me cheering on the 
                Philadelphia Eagles (go birds!) and hitting the streets and trails for a run. 
                Proud to be from Philadelphia and excited about the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Phillies Twitter Bot */}
              <div className="card p-6 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    🏟️
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Phillies Twitter Bot</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A Philadelphia Phillies Twitter bot posting daily highlights, game summaries, and other Phillies content during the MLB season.
                  Built with Python and various APIs.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/calebashw/philstwitterbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://x.com/philstweetbot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    View on X
                  </a>
                </div>
              </div>

              {/* Medilink */}
              <div className="card p-6 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    🏥
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">MediLink</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  MediLink is a functioning EMR, allowing for appointments scheduling, check-ins, appointment notes, and other necessary functions for a doctor's office.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://brunchlabs.notion.site/Projects-82418b46babc4133bdee9f35f7d164be?p=c0234435571f4924b23366ffe9bd1b17&pm=c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    View Demo
                  </a>
                </div>
              </div>

              {/* Tiny Search Engine */}
              <div className="card p-6 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    🔍
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tiny Search Engine</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A crawler, indexer, and querier, all built in C that with provided data can act as a search engine.
                </p>
                {/* <div className="flex space-x-3">
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                </div> */}
              </div>

              {/* Nuggets Game */}
              <div className="card p-6 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    🎮
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nuggets Game</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Multiplayer terminal-based game with a functioning client and server written in C. Personally responsible for creating the client.
                </p>
                {/* <div className="flex space-x-3">
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Coursework Section */}
        <section id="coursework" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Coursework</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: "Intro to Programming and Computation (CS1)",
                  content: "Topics: Python, fundamental programming skills, introduction to classes and objects."
                },
                {
                  title: "Problem Solving via Object-Oriented Programming",
                  content: "Topics: Java, OOP, Data Structures, Algorithms"
                },
                {
                  title: "Software Design & Implementation",
                  content: "Topics: Software Design and Documentation, C, Debugging and Testing, Git"
                },
                {
                  title: "Intro to Applied Computer Science",
                  content: "Topics: Linear Algebra, Intro to ML"
                },
                {
                  title: "Machine Learning and Statistical Data Analysis",
                  content: "Topics: Python, Jupyter Notebooks, ML, Statistical Modeling"
                },
                {
                  title: "Full-Stack Web Development",
                  content: "Topics: React, Node.js, State Management, MongoDB, JavaScript, REST APIs, CRUD, etc."
                },
                {
                  title: "Discrete Mathematics",
                  content: "Topics: Proofs, Graph Theory, Combinatorics, Number Theory, etc."
                }
              ].map((course, index) => (
                <div key={index} className="card overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300">{course.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              I'm currently open to opportunities! Feel free to reach out to me:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:calebwilliam@comcast.net"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-3">✉️</div>
                <div className="font-medium">Email</div>
                <div className="text-xs opacity-75">calebwilliam@comcast.net</div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/caleb-ash-606312247/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-3">💼</div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm opacity-75">Connect with me</div>
              </a>
              
              <a
                href="https://github.com/calebashw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-3">💻</div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm opacity-75">View my code</div>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-75">© {new Date().getFullYear()} Caleb Ash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
