import { useState } from "react";
import InputField from "./inputField";
import SectionThumbnail from "./SectionThumbnail";
import FromUntil from "./FromUntil";
import SaveAndBack from "./SaveNBack";

export default function Education () {
    const [dropDown, setDropDownArrow] = useState(false)
    const [degree, setDegree] = useState('')
    const [school, setSchool] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')


    const handleDropDownChange = () => {
        setDropDownArrow(!dropDown)
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
                onChange={(e) => setDegree(e.target.value)}
                />

                <InputField
                label='School'
                id='school'
                placeholder="Enter your school or university"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                />    

                <InputField
                label='City'
                id='city'
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                /> 

                <InputField
                label='Country'
                id='country'
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                    />

                <FromUntil/>
                <SaveAndBack />


            </form>
        )
    }
    return(
        <SectionThumbnail
        iconSrc='src/assets/degree.svg'
        sectionName='Education'
        onClick={handleDropDownChange}
        openSrc='src/assets/down-arrow.svg'
       />
    )
}