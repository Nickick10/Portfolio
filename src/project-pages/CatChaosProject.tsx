import CCTitle from '../assets/CCTitle.png';
import CCLevel from '../assets/CCLevel.png';
import CCPowerUps from '../assets/CCPowerUps.png';
import './ProjectsPages.css';

const CatChaosProject = () => {
    return (
        <div className="project">
            {/* Title Section */}
            <div className="title-section">
                <img src={CCTitle} alt="CC Title" className="title-image" />
                <div className="title-content">
                    <h1>Cat Chaos</h1>
                    <p className="subtitle"></p>
                </div>
            </div>

            {/* Project Overview */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Project Overview</h2>
                    <p>
                        
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
                            <img src={} alt="CC ..." className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={} alt="CC ..." className="project-image" />
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
                            <p></p>
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

export default CatChaosProject;
