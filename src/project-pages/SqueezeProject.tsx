import STitle from '../assets/STitle.png';
import SGame from '../assets/SGame.png';
import SGraph from '../assets/SGraph.png';
import SDailyScene from '../assets/SDailyScene.png';
import './ProjectsPages.css';

const SqueezeProject = () => {
    return (
        <div className="project">
            {/* Title Section */}
            <div className="title-section">
                <img src={STitle} alt="SQUEEZE Title" className="title-image" />
                <div className="title-content">
                    <h1>SQUEEZE!</h1>
                    <p className="subtitle">2D Educational game designed using Unity & C#</p>
                </div>
            </div>

            {/* Project Overview */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Project Overview</h2>
                    <p>
                        SQUEEZE! is an engaging and educational game designed to 
                        teach financial literacy and business acumen through a 
                        dynamic experience of running a lemonade stand. From 
                        understanding basic financial principles to making strategic 
                        decisions, the game aims to provide a fun and interactive way 
                        to develop real-world skills.
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Main Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>💰 Budget</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>📂 Categories</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>🚫 Spending Limits</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>📝 Activity Log</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>📊 Pie Chart Visualization</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>🔔 Notifications</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Images */}
            <div className="section">
                <div className="content-wrapper">
                    <div className="images-grid">
                        <div className="image-item">
                            <img src={SGame} alt="SQUEEZE Game Screen" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={SGraph} alt="SQUEEZE Graph Scene" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={SDailyScene} alt="SQUEEZE Daily Scene" className="project-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Development Process */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Development Process</h2>
                    <div className="process-timeline">
                        <div className="feature-card">
                            <h3>1. Sprints</h3>
                            <p>Before each sprint we started by creating user scenarios and created wireframe designes of what we are aiming to create</p>
                        </div>
                        <div className="feature-card">
                            <h3>2. Separate Game Functionality</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>3. Creating All Screens</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>4. Data Integration</h3>
                            <p></p>
                        </div>
                        <div className="feature-card">
                            <h3>5. Testing</h3>
                            <p>Tested everything thoroughly to ensure all features work correctly for the final version</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SqueezeProject;
