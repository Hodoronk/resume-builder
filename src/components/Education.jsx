
import { useState } from "react";
import InputField from "./inputField";
import SectionThumbnail from "./SectionThumbnail";
import FromUntil from "./FromUntil";
import SaveAndBack from "./SaveNBack";


export function Education ({education, onEducationChange, onSaveEducation}) {
    const { degree, school, city, country, from, until} = education;

    const [dropDown, setDropDown] = useState(false)

    const handleDropDownChange = (event) => {
        event.preventDefault();
        setDropDown(!dropDown)
    }
    


    if(dropDown) {
        return(

            <form action="">
                
                <h2>Education</h2>
                <InputField
                label='Degree'
                id='degree'
                placeholder="Enter your degree"
                value={degree}
                onChange={(e) => onEducationChange('degree', e.target.value)}
                />

                <InputField
                label='School'
                id='school'
                placeholder="Enter your school or university"
                value={school}
                onChange={(e) => onEducationChange('school', e.target.value)}
                />    

                <InputField
                label='City'
                id='city'
                placeholder="Enter city"
                value={city}
                onChange={(e) => onEducationChange('city', e.target.value)}
                /> 

                <InputField
                label='Country'
                id='country'
                placeholder="Enter country"
                value={country}
                onChange={(e) => onEducationChange('country', e.target.value)}
                />

                <FromUntil
                changeFrom={(e) => onEducationChange('from', e.target.value)}
                changeUntil={(e) => onEducationChange('until', e.target.value)}
                />
                <SaveAndBack 
                backOnClick={handleDropDownChange}
                onSave = {() => {
                    onSaveEducation();
                    setDropDown(!dropDown);
                }}
                 />


            </form>
        )
    }
    

    return(
        <SectionThumbnail
        iconSrc='public/assets/degree.svg'
        sectionName='Education'
        onClick={handleDropDownChange}
        openSrc='public/assets/plus.svg'
       />
    )
}


export function EducationSection({ savedEducations }) {
    return (
        <>
            <div className='resume-section'>
                <h2 className='section-title'>Education</h2>
            </div>
            {savedEducations.map((education, index) => (
                <div key={index} className="section-details">
                    
                    <div className="section-dates">
                        <span>{education.from} - {education.until}</span>
                        <span>{education.city}, {education.country}</span>
                    </div>
                    <div className="section-stats">
                        <h4>{education.degree}</h4>
                        <span>{education.school}</span>
                    </div>
                </div>
            ))}
        </>
    );
}
