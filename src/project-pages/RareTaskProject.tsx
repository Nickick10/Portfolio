import RTRTitle from '../assets/RTRTitle.png';
import RTRFinalProduct from '../assets/RTRFinalProduct.png';
import RTRFinalProductAddTask from '../assets/RTRFinalProductAddTask.png';
import RTRFirstPrototypeStory from '../assets/RTRFirstPrototypeStory.png';
import './ProjectsPages.css';

const RareTaskProject = () => {
    return (
        <div className="project">
            {/* Title Section */}
            <div className="title-section">
                <img src={RTRTitle} alt="RTR Title" className="title-image" />
                <div className="title-content">
                    <h1>Rare Task Reminder</h1>
                    <p className="subtitle"></p>
                </div>
            </div>

            {/* Project Overview */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Project Overview</h2>
                    <p>
                        Rare Task Reminder is designed for busy homeowners juggling 
                        full-time jobs and everyday responsibilities. It solves a 
                        common and frustrating problem: remembering infrequent but 
                        important maintenance tasks that keep your home and life running 
                        smoothly. Tasks like changing air filters, checking smoke detectors, 
                        flipping mattresses, or changing your car’s oil often fall through the 
                        cracks—not because they’re hard, but because they happen so rarely.
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Main Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>📅 Smart Task Scheduling</h3>
                            <p>
                                Add one-time or repeating tasks with custom 
                                intervals (e.g., every 3 months or annually), 
                                ideal for infrequent home maintenance reminders.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🔁 Automatic Rescheduling</h3>
                            <p>
                                When a task is marked complete, the app 
                                automatically reschedules the next occurrence 
                                based on the preset interval.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>✏️ Task Editing & Management</h3>
                            <p>
                                Easily edit, update, or delete any task, giving 
                                users full control over their maintenance 
                                schedule as priorities change.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🛠️ Designed for Low-Frequency Tasks</h3>
                            <p>
                                Built specifically for tasks that are easy to 
                                forget—like flipping a mattress or checking smoke 
                                detectors—unlike typical daily reminder apps.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🎯 Clean, User-Centered UI Design</h3>
                            <p>
                                Focused on simplicity and clarity, the interface 
                                prioritizes usability for busy homeowners with limited time.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🧪 Prototyped for UX Testing</h3>
                            <p>
                                The app was developed using wireframes and interactive 
                                prototypes to validate design choices through early user feedback and testing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Images */}
            <div className="section">
                <div className="content-wrapper">
                    <div className="images-grid">
                        <div className="image-item">
                            <img src={RTRFirstPrototypeStory} alt="RTR Prototype" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={RTRFinalProduct} alt="RTR Final Product" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={RTRFinalProductAddTask} alt="RTR Final Product Add Task" className="project-image" />
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
                            <h3>1. Problem Statement</h3>
                            <p>
                                Identified the challenge faced by busy homeowners: 
                                remembering infrequent but important maintenance tasks. 
                                Researched common pain points and documented how missed 
                                tasks can lead to costly or inconvenient outcomes.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>2. User Interviews for Goals</h3>
                            <p>
                                Conducted interviews with several homeowners to understand 
                                their routines, frustrations, and what features would 
                                help them most. Gathered insights on how people currently 
                                track (or forget) rare tasks and what would make a 
                                reminder app genuinely useful.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>3. Story Boards</h3>
                            <p>
                                Created storyboards to visualize typical user scenarios, 
                                such as receiving a reminder to change an air filter 
                                or mark a task as complete. Mapped out the user journey 
                                from forgetting a task to successfully completing 
                                it with the app’s help.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>4. Paper Prototype</h3>
                            <p>
                                Sketched low-fidelity paper prototypes of the app’s 
                                main screens and flows. Used these to quickly 
                                iterate on layout ideas and gather early feedback 
                                from potential users before investing in digital design.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>5. User Testing and Prototype Modification</h3>
                            <p>
                                Developed interactive digital prototypes and conducted 
                                two rounds of usability testing. Collected feedback on 
                                navigation, clarity, and overall experience.
                                Made iterative improvements after each round, refining the 
                                interface and features to better match user needs.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>6. Final Product</h3>
                            <p>
                                Built the final version of the app with a clean, 
                                user-centered UI. Ensured all core features—smart 
                                scheduling, automatic rescheduling, suggested tasks and easy 
                                task management—were intuitive and reliable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RareTaskProject;
