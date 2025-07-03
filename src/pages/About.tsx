import './About.css';

const About = () => (
  <div className="About">
    <h1>Nicholas Filipov</h1>
    <h2>Computer Science B.S. Graduate | Aspiring Software Engineer | Open to New Opportunities</h2>

    <p className="Paragraph">
        I'm passionate about creating technology that makes a difference. 
        From an early interest in software to earning my degree in Computer Science with a concentration 
        in Software Engineering, I've grown through hands-on experience and countless hours of building, 
        learning, and problem-solving. Along the way, I've developed meaningful projects that
        reflect my dedication to innovation and continuous growth. <br></br><br></br>

        I'm always excited to take on new challenges and push the boundaries of what I can do. 
        Whether it's refining a product, collaborating on a team, or learning a new framework, 
        I love the process of bringing ideas to life through code. <br></br><br></br>

        Feel free to check out my portfolio to see some of the work I've done. 
        If you'd like to connect, collaborate, or just say hi, head over to the contact 
        page—I'd love to hear from you!
    </p>

    <h2 className="NextSection">Honors</h2>
    <ul style={{fontSize: '20px'}}>
      <li><strong>Cum Laude</strong> - UIC, B.S. in Computer Science, May 2025</li>
    </ul>

    <h2 className="NextSection">Certifications</h2>
    <ul style={{fontSize: '20px'}}>
      <li><strong>Microsoft Certified: Azure Fundamentals</strong>  Microsoft, 2024</li>
    </ul>
  </div>
);

export default About;
