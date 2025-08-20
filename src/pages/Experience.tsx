import './Experience.css';
import microsoftLogo from '../assets/microsoft.png';
import jbssLogo from '../assets/jbss.png';
import uicLogo from '../assets/uic.png';

const Experience = () => {
  return (
    <div className="Experience">
      <div className="Title">
        <h1>Experience</h1>
        <p>My professional journey in technology and development</p>
      </div>
      
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src={microsoftLogo} alt="Microsoft" />
            </div>
            <div className="company-info">
              <h2>Datacenter Technician II</h2>
              <h3>Microsoft</h3>
              <p className="contract-note">Contract through Insight Global</p>
            </div>
            <div className="date-badge">
              <span>July 2025 - Present</span>
            </div>
          </div>
          <div className="experience-content">
            <ul>
              <li>Maintained and deployed datacenter hardware, including servers, switches, racks, and storage devices to ensure uptime and performance. Created rack layouts to support efficient deployment and airflow.</li>
              <li>Supported day-to-day operations by monitoring equipment and resolving hardware issues.</li>
            </ul>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src={jbssLogo} alt="John B. Sanfilippo & Son" />
            </div>
            <div className="company-info">
              <h2>IT Intern</h2>
              <h3>John B. Sanfilippo & Son, Inc.</h3>
            </div>
            <div className="date-badge">
              <span>May 2023 - August 2023</span>
            </div>
          </div>
          <div className="experience-content">
            <ul>
              <li>Worked in multiple areas of the IT Department. Hands-on training and experience in configuring and installing electronic devices, troubleshooting the computer system, and various software.</li>
              <li>Shadowed multiple IT experts to develop a comprehensive understanding of technology infrastructure and maintenance best practices.</li>
            </ul>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src={uicLogo} alt="University of Illinois at Chicago" />
            </div>
            <div className="company-info">
              <h2>Mobile Application Developer Intern</h2>
              <h3>University of Illinois at Chicago</h3>
            </div>
            <div className="date-badge">
              <span>June 2022 - August 2022</span>
            </div>
          </div>
          <div className="experience-content">
            <ul>
              <li>Developed Android applications using Kotlin and Android Jetpack Compose, establishing a strong foundation in mobile app development.</li>
              <li>Developed a diverse portfolio of utility and game applications to build hands-on experience in mobile development.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
