import MMTitle from '../assets/MMTitle.png';
import MMLogin from '../assets/MMLogin.png';
import MMGraph from '../assets/MMGraph.png';
import MMLog from '../assets/MMLog.png';
import './ProjectsPages.css';

const MoneyManProject = () => {
    return (
        <div className="project">
            {/* Title Section */}
            <div className="title-section">
                <img src={MMTitle} alt="Money-Man Title" className="title-image" />
                <div className="title-content">
                    <h1>Money-Man</h1>
                    <p className="subtitle">A money management application built with Android Studio & Firebase</p>
                </div>
            </div>

            {/* Project Overview */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Project Overview</h2>
                    <p>
                        Money-Man allows users to create an account in order to be able to 
                        track their expenditures and manage their budget across different 
                        spending categories. The application lets users input their own categories 
                        and spending information then be able to visualize it in different ways. 
                        The application uses a realtime database to keep track of all of the users information.
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
                            <p>Set and manage budgets for different spending categories to control your finances</p>
                        </div>
                        <div className="feature-card">
                            <h3>📂 Categories</h3>
                            <p>Create and customize spending categories to organize your transactions</p>
                        </div>
                        <div className="feature-card">
                            <h3>🚫 Spending Limits</h3>
                            <p>Set spending limits for categories and receive alerts when approaching thresholds</p>
                        </div>
                        <div className="feature-card">
                            <h3>📝 Activity Log</h3>
                            <p>Track all your financial activities with detailed transaction logging</p>
                        </div>
                        <div className="feature-card">
                            <h3>📊 Pie Chart Visualization</h3>
                            <p>Visualize your spending patterns with interactive pie charts</p>
                        </div>
                        <div className="feature-card">
                            <h3>🔔 Notifications</h3>
                            <p>Receive alerts and notifications for budget limits and important financial events</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Images */}
            <div className="section">
                <div className="content-wrapper">
                    <div className="images-grid">
                        <div className="image-item">
                            <img src={MMLogin} alt="Money-Man Login Interface" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={MMGraph} alt="Money-Man Data Visualization" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={MMLog} alt="Money-Man Transaction Log" className="project-image" />
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
                            <h3>2. Database Design</h3>
                            <p>Designed Firebase Realtime Database schema for efficient data storage and retrieval</p>
                        </div>
                        <div className="feature-card">
                            <h3>3. Creating All Screens</h3>
                            <p>Developed all the application screens including login, dashboard, and various feature screens</p>
                        </div>
                        <div className="feature-card">
                            <h3>4. Data Integration</h3>
                            <p>Implemented data creation and retrieval functionality throughout the app, including pie chart and activity log screens</p>
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

export default MoneyManProject;
