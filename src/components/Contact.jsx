import React from 'react'


const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-box">
          <h1>Contact Me</h1>
          <p>
            I’m always happy to connect! Whether it’s about a new project,
            collaboration, or just to chat — reach out through LinkedIn or Gmail.
          </p>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>

            <a
              href="mailto:yourname@gmail.com"
              className="gmail"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
