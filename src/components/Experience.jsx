import { useState } from "react"
import InputField from "./inputField"
import SectionThumbnail from "./SectionThumbnail"
import FromUntil from "./FromUntil"
import SaveAndBack from "./SaveNBack"


export function Experience ({experience, onExperienceChange, onSaveExperience}) {
    const [dropDown, setDropDown] = useState(false)
    const {jobTitle, company, description, location, from, until} = experience

    const handleDropDownChange = (e) => {
        e.preventDefault();
        setDropDown(!dropDown)
    }

    if(dropDown) {
        return(
            <form action="">
            <h2>Experience</h2>
                <InputField
                label='Job title'
                id='job-title'
                placeholder="Enter your job title"
                value={jobTitle}
                onChange={(e) => onExperienceChange('jobTitle', e.target.value)}
                />

                <InputField
                label='Company'
                id='company'
                placeholder="Enter company"
                value={company}
                onChange={(e) => onExperienceChange('company', e.target.value)}
                />


                <InputField
                label='Location'
                id='location'
                placeholder="Enter location"
                value={location}
                onChange={(e) => onExperienceChange('location', e.target.value)}
                />

                <InputField
                type="textarea"
                label='Description'
                id='description'
                placeholder="Describe your main tasks"
                value={description}
                onChange={(e) => onExperienceChange('description', e.target.value)}
                />

                <FromUntil 
                changeFrom={(e) => onExperienceChange('from', e.target.value)}
                changeUntil={(e) => onExperienceChange('until', e.target.value)}
                />
                <SaveAndBack backOnClick={handleDropDownChange} 
                onSave={() => {
                    onSaveExperience();
                    setDropDown(!dropDown);
                }} />
            </form>

        )
    }
    return(
        <SectionThumbnail
        iconSrc='/assets/briefcase.svg'
        sectionName='Experience'
        onClick={handleDropDownChange}
        openSrc='/assets/plus.svg'
       />
    )
}

export function ExperienceSection({ savedExperiences }) {
    return (
        <>
            <div className="resume-section">
                <h2 className="section-title">Professional Experience</h2>
            </div>

            {savedExperiences.map((experience, index) => (
                <div key={index} className="section-details">
                    <div className="section-dates">
    
                        <span>{experience.from} - {experience.until}</span>
                        <span>{experience.location}</span>
                    </div>
                    <div className="section-stats">
                        <h4>{experience.company}</h4>
                        <span>{experience.jobTitle}</span>
                        <div id="description-container">
                            <span id="job-description">{experience.description}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
