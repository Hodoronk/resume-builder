import { useState } from "react";
import InputField from "./inputField";

function Skill({onDelete}) {
    return(
        <div id ='skill-div'>
            <InputField id='skill' placeholder="Enter your skill" />
            <button onClick={onDelete} id='delete-button'><img src="public/assets/trash-2.svg" alt="" /></button>
        </div>
    )
}

export function Skills() {
    const [skills, setSkills] = useState([{ id: 1, visibility: true }]);

    const handleDelete = (id) => {
        setSkills((prevSkills) =>
            prevSkills.map((skill) =>
                skill.id === id ? { ...skill, visibility: false } : skill
            )
        );
    };

    const handleAddSkill = () => {

        setSkills((prevSkills) => [
            ...prevSkills,
            { id: prevSkills.length + 1, visibility: true },
        ]);
    };

    return (
        <form id="skills-form">
            <h3>Skills</h3>
            {skills.map((skill) => (
                skill.visibility && (
                    <Skill key={skill.id} onDelete={() => handleDelete(skill.id)} />
                )
            ))}
            <button type="button" onClick={handleAddSkill} id="plus-btn" > <img src="public/assets/plus.svg" alt="" /> </button>
        </form>
    );
}

export function SkillSection({ skills }) {
    return (
        <>
            <div className="resume-section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}