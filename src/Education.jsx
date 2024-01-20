import { useState } from "react";

export default function Education () {
    const [dropDown, setDropDownArrow] = useState(false)
    const [degree, setDegree] = useState('')
    const [school, setSchool] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const handleDegreeChange = (e) => {
        setDegree(e.target.value)
    }
    const handleSchoolChange = (e) => {
        setSchool(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleDropDownChange = () => {
        setDropDownArrow(!dropDown)
    }


    if(dropDown) {
        return(
            <form action="">
                <h3>Degree</h3>
                <input type="text"
                placeholder="Enter degree / Field of study"
                value={degree}
                onChange={handleDegreeChange}
                />

                <h3>School</h3>
                <input type="text"
                placeholder="Enter school / university"
                value={school}
                onChange={handleSchoolChange}
                />

                <h3>City</h3>
                <input type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleCityChange}
                />

                <h3>Country</h3>
                <input type="text"
                placeholder="Enter country"
                value={country}
                onChange={handleCountryChange}
                />

                <h3>Start Date</h3>
                <input type="date" />

                <h3>End Date</h3>
                <input type="date" />
                <button>Save</button>

            <button onClick={handleDropDownChange}>Dropdown</button>
            </form>
        )
    }
    return(
        <div>
            <h3>Education</h3>
            <button onClick={handleDropDownChange}>Dropdown up</button>
        </div>
    )
}