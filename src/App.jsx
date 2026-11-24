
import './App.css'
import profileImage from './assets/jyotsna-profile.jpeg'

function App() {
  const emailLink =
    'https://mail.google.com/mail/?view=cm&fs=1&to=gjyotsna08@gmail.com'

  const githubLink =
    'https://github.com/gjyotsna0805-cpu'

  const linkedinLink =
    'https://www.linkedin.com/in/g-jyotsna-78944b383/'

  const resumeLink = '/Jyotsna-Resume.pdf'

  return (
    <div className="portfolio">

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Jyotsna<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="intro">HELLO, WORLD! I'M</p>

          <h1>Jyotsna<span>.</span></h1>

          <h2>
            Computer Science Student &
            <span> Tech Enthusiast</span>
          </h2>

          <p className="description">
            I'm passionate about technology, software development
            and artificial intelligence. I love learning new things,
            exploring opportunities and building meaningful projects.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a
              href={resumeLink}
              download="Jyotsna-Resume.pdf"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={emailLink}
              target="_blank"
              rel="noreferrer"
            >
              Email ↗
            </a>

          </div>

        </div>

        {/* PROFILE PHOTO */}
        <div className="hero-image">

          <img
            src={profileImage}
            alt="Jyotsna"
            className="profile-photo"
          />

          <p>Learning • Building • Growing</p>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="section" id="about">

        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className="section-description">
          I'm Jyotsna, a Computer Science student at Rungta
          International Skills University, passionate about software
          development, artificial intelligence and technology.

          I serve as the President of the Placecom Committee at RIU
          and am a Microsoft Student Ambassador.

          I also actively contribute to student tech communities
          and enjoy organizing learning opportunities.

          I'm constantly learning, building projects and exploring
          ways to turn ideas into reality.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section className="section" id="skills">

        <p className="section-label">MY TECHNOLOGIES</p>

        <h2>Skills & Technologies</h2>

        <div className="skills-list">
          <span>Java</span>
          <span>C</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>GitHub</span>
          <span>Microsoft Copilot</span>
        </div>

      </section>

      {/* EXPERIENCE & LEADERSHIP */}
      <section className="section" id="experience">

        <p className="section-label">MY JOURNEY</p>

        <h2>Experience & Leadership</h2>

        <div className="experience-list">

          {/* PLACECOM */}
          <div className="experience-card">

            <span className="experience-tag">
              Leadership
            </span>

            <h3>President – Placecom Committee</h3>

            <p className="organization">
              Rungta International Skills University
            </p>

            <p>
              Leading student placement initiatives, coordinating
              activities and creating opportunities for students to grow.
            </p>

          </div>

          {/* HACKERRANK */}
          <div className="experience-card">

            <span className="experience-tag">
              Community Leadership
            </span>

            <h3>HackerRank Club Co-Lead</h3>

            <p className="organization">
              RIU – Infinity Coders
            </p>

            <p>
              Supporting coding activities, technical events and
              peer learning within the student developer community.
            </p>

          </div>

          {/* PLEDGE FOUNDATIONS */}
          <div className="experience-card">

            <span className="experience-tag">
              Internship
            </span>

            <h3>Intern – Pledge Foundations</h3>

            <p className="organization">
              Pledge Foundations
            </p>

            <p>
              Gained practical exposure through an internship,
              developed professional skills and learned to work
              in a collaborative environment.
            </p>

          </div>

          {/* MICROSOFT */}
          <div className="experience-card">

            <span className="experience-tag">
              Technology Community
            </span>

            <h3>Microsoft Student Ambassador</h3>

            <p className="organization">
              Microsoft
            </p>

            <p>
              Exploring Microsoft technologies and supporting
              technology learning and community engagement.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="section" id="projects">

        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <div className="project-grid">

          {/* PROJECT 1: PELAGIX */}
          <div className="project-card">

            <span className="experience-tag">
              AI / Computer Vision
            </span>

            <h3>Pelagix</h3>

            <p>
              An AI-powered underwater marine debris and anomaly
              detection project using side-scan sonar imagery.
              Designed to identify underwater debris and anomalies
              in challenging visibility conditions.
            </p>

            <div className="project-tags">
              <span>Artificial Intelligence</span>
              <span>Computer Vision</span>
              <span>YOLO</span>
              <span>Sonar Imagery</span>
            </div>

          </div>

          {/* PROJECT 2: CUSTOMER SERVICE QUEUE */}
          <div className="project-card">

            <span className="experience-tag">
              Java / Data Structures
            </span>

            <h3>Customer Service Queue Management System</h3>

            <p>
              A Java-based project that simulates customer service
              operations using a Circular Queue. It follows the
              FIFO (First In, First Out) principle to manage
              customer requests efficiently.

              The project demonstrates queue operations and
              efficient reuse of array positions.
            </p>

            <div className="project-tags">
              <span>Java</span>
              <span>Arrays</span>
              <span>Circular Queue</span>
              <span>Data Structures</span>
            </div>

          </div>

        </div>

      </section>

      
{/* PLACECOM CEREMONY GALLERY */}
<section className="section" id="gallery">

  <p className="section-label">
    MOMENTS TO REMEMBER
  </p>

  <h2>A Journey of Leadership & Responsibility</h2>

  <p className="gallery-description">
    A moment of recognition, a journey of responsibility,
    and the beginning of creating opportunities for others.
  </p>

  <div className="gallery-grid">

    <a
      href="/images/placecom-ceremony.jpeg"
      target="_blank"
      rel="noreferrer"
      className="gallery-card"
      aria-label="Open Placecom ceremony photograph"
    >
      <img
        src="/images/placecom-ceremony.jpeg"
        alt="Placecom President badge pinning ceremony"
      />

      <div className="gallery-overlay">
        <h3>A Moment of Recognition</h3>
        <p>Click to view full image ↗</p>
      </div>
    </a>

    <a
      href="/images/placecom-moment.jpeg"
      target="_blank"
      rel="noreferrer"
      className="gallery-card"
      aria-label="Open Placecom leadership photograph"
    >
      <img
        src="/images/placecom-moment.jpeg"
        alt="Placecom leadership moment with university faculty"
      />

      <div className="gallery-overlay">
        <h3>A Proud Moment</h3>
        <p>Click to view full image ↗</p>
      </div>
    </a>

    <a
      href="/images/placecom-team.jpeg"
      target="_blank"
      rel="noreferrer"
      className="gallery-card"
      aria-label="Open Placecom team photograph"
    >
      <img
        src="/images/placecom-team.jpeg"
        alt="Placecom committee team photograph"
      />

      <div className="gallery-overlay">
        <h3>One Team, One Vision</h3>
        <p>Click to view full image ↗</p>
      </div>
    </a>

    <a
      href="/images/placecom-team-2.jpeg"
      target="_blank"
      rel="noreferrer"
      className="gallery-card"
      aria-label="Open Placecom group photograph"
    >
      <img
        src="/images/placecom-team-2.jpeg"
        alt="Placecom committee group photograph"
      />

      <div className="gallery-overlay">
        <h3>Building Together</h3>
        <p>Click to view full image ↗</p>
      </div>
    </a>

  </div>

</section>


      {/* CONTACT SECTION */}
      <section className="section contact" id="contact">

        <p className="section-label">
          LET'S CONNECT
        </p>

        <h2>Let's build something meaningful.</h2>

        <p>
          I'd love to connect, collaborate and explore new opportunities.
        </p>

        <div className="contact-links">

          <a
            href={emailLink}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Email Me ↗
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn ↗
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub ↗
          </a>

          <a
            href={resumeLink}
            download="Jyotsna-Resume.pdf"
            className="secondary-btn"
          >
            Download Resume ↓
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Jyotsna. Built with curiosity and code.
        </p>

      </footer>

    </div>
  )
}

export default App
