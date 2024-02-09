
import { useState } from "react";
import InputField from "./inputField";
import SectionThumbnail from "./SectionThumbnail";
import FromUntil from "./FromUntil";
import SaveAndBack from "./SaveNBack";


export default function Education ({education, onEducationChange, onSaveEducation}) {
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
                onSave={onSaveEducation}
                 />


            </form>
        )
    }
    

    return(
        <SectionThumbnail
        iconSrc='src/assets/degree.svg'
        sectionName='Education'
        onClick={handleDropDownChange}
        openSrc='src/assets/plus.svg'
       />
    )
}