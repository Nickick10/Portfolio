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
                            <h3>💰 Dynamic Pricing Mechanism</h3>
                            <p>Set and adjust product prices to maximize profits while balancing customer demand.</p>
                        </div>
                        <div className="feature-card">
                            <h3>📊 Financial Graphs & Analytics</h3>
                            <p>Track daily profits, sales, and trends through easy-to-read graphs to guide smart decisions.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🧪 Crafting System</h3>
                            <p>Combine ingredients to create and sell products like lemonade and tea for profit.</p>
                        </div>
                        <div className="feature-card">
                            <h3>⭐ Rating & Reputation System</h3>
                            <p>Serve customers quickly and accurately to maintain a high 5-star rating and attract more visitors.</p>
                        </div>
                        <div className="feature-card">
                            <h3>⏳ Customer Behavior Simulation</h3>
                            <p>Serve randomized customers under time pressure, simulating real-world business urgency.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎲 Adaptive Probability Engine</h3>
                            <p>Behind-the-scenes logic adjusts customer flow and sales chances based on your actions.</p>
                        </div>
                        <div className="feature-card">
                            <h3>📣 Real-Time Feedback System</h3>
                            <p>Get performance insights at the end of each day that help you improve pricing, service, and strategy.</p>
                        </div>
                        <div className="feature-card">
                            <h3>📅 Daily Progression Loop</h3>
                            <p>Advance through in-game days, unlock new items, and grow your business over time.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🖱️ Intuitive GUI</h3>
                            <p>Clean 2D interface for managing crafting, sales, pricing, and performance with ease.</p>
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
                            <p>
                                Before each sprint we started by creating user scenarios and 
                                created wireframe designes of what we are aiming to create
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>2. Separate Game Functionality</h3>
                            <p>
                                We broke down the game into modular components such as customer 
                                behavior, crafting, pricing, and analytics. Each feature was developed 
                                and tested independently to ensure smooth integration and maintainability.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>3. Creating All Game Scenes</h3>
                            <p>
                                We designed and implemented the main gameplay, analytics, and daily 
                                summary scenes in Unity. Each scene was built with a focus on user 
                                experience, clear navigation, and visual consistency, using custom 
                                assets and UI elements.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>4. Data Integration</h3>
                            <p>
                                We connected gameplay events to data tracking systems, enabling 
                                real-time updates of player stats, financial graphs, and progression. 
                                This allowed for dynamic feedback and analytics, enhancing the 
                                educational value of the game.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>5. Testing</h3>
                            <p>
                                Tested everything thoroughly to ensure all features work 
                                correctly for the final version.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SqueezeProject;

