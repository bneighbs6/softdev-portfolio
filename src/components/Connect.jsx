import React from "react";

function Connect() {
    return (
      <div className="connect-container" id="connect">
        <h3>Let's Connect</h3>
        <p>via Email, LinkedIn, GitHub</p>
        <div className="connect-icons">
          <span>
            <a href="mailto:bneighbs6@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/brett-neighbors/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/bneighbs6"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    );
}

export default Connect;