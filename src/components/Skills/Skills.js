import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS and JavaScript, as well as design software as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text from Baron Effeh</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a demo text from Baron Effeh</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text from Baron Effeh</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;