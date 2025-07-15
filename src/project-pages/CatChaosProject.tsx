import CCTitle from '../assets/CCTitle.png';
import CCLevel from '../assets/CCLevel.png';
import CCSpawn from '../assets/CCSpawn.png';
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
                    <p className="subtitle">3D cat simulator game designed using Unity & C#</p>
                </div>
            </div>

            {/* Project Overview */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Project Overview</h2>
                    <p>
                        Cat Chaos is a third & first person cat simulator where players take 
                        on the role of one of the many mischievous cats with one goal—cause 
                        as much destruction as possible before sunrise, all while avoiding 
                        detection by their sleeping owner. The game is designed for PC, 
                        targeting casual gamers and cat lovers who enjoy physics-based 
                        sandbox experiences and lighthearted chaos.
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="section">
                <div className="content-wrapper">
                    <h2>Main Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>🐾 Physics-Based Destruction System</h3>
                            <p> 
                                Players can push, claw, and knock over objects using 
                                real-time physics to create dynamic and varied in-game scenarios.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🌙 Stealth vs. Chaos Gameplay</h3>
                            <p>
                                Actions generate noise that fills a sound meter. Players must 
                                balance destruction with stealth to avoid alerting the owner before sunrise.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🎮 Power-Ups and Enhanced Movement</h3>
                            <p>
                                Jump and speed boosts allow players to access new areas, reach 
                                higher elevations, and extend exploration and interaction options.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>👀 Sound Meter and AI</h3>
                            <p>
                                Sound meter is controlled by the players actions. The owner sleeps 
                                until the noise threshold is reached, then begins patrolling and 
                                chasing the player. A roaming dog character adds pressure by barking 
                                when nearby, increasing noise and the risk of alerting the owner.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🎨 Shaders</h3>
                            <p>
                                Breakables, interactables, and power-ups are clearly marked 
                                with shaders to support quick decision-making. Toon, outline, and 
                                reflective shaders highlight key objects, improving clarity while 
                                adding visual polish to the game’s aesthetic.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>🎵 Immersive Audio Design</h3>
                            <p>
                                Sound effects (footsteps, item impacts, environment ambiance) 
                                reinforce player actions and enhance environmental awareness.
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
                            <img src={CCSpawn} alt="CC Spawn Room" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={CCPowerUps} alt="CC PowerUps" className="project-image" />
                        </div>
                        <div className="image-item">
                            <img src={CCLevel} alt="CC AI and part of Level" className="project-image" />
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
                            <h3>1. Phyical Prototype + Features & Mechanics</h3>
                            <p>
                                Created a physical game prototype to quickly test and 
                                iterate on core mechanics, player objectives, and more. 
                                This helped define the main gameplay loop and essential 
                                features before development began.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>2. Level Design</h3>
                            <p>
                                Designed the house environment, placing interactive objects, 
                                obstacles, and power-ups to encourage exploration and creative problem-solving.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>3. AI and Gameplay</h3>
                            <p>
                                Implemented the owner and dog AI, sound meter logic, and player controls. 
                                Developed systems for object interaction, noise generation, and AI 
                                interactions, ensuring engaging and dynamic gameplay.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>4. UI, Shaders, and Sounds Design</h3>
                            <p>
                                Created user interface elements for the sound meter, power-ups, and player feedback. 
                                Developed and applied custom shaders for visual clarity and style, and integrated 
                                immersive audio to reinforce actions and atmosphere.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>5. Two Rounds of Play Testing</h3>
                            <p>
                                Let players try the game, break it, and give feedback. Act based off of
                                feedback by fixing and adding more to the game to improve fun, playability,
                                and balance to the game. (This step was done multiple times)
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3>6. Testing</h3>
                            <p>Tested everything thoroughly to ensure all features work correctly for the final version.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatChaosProject;
