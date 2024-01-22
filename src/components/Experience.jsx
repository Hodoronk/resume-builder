import { useState } from "react"
import InputField from "./inputField"
import SectionThumbnail from "./SectionThumbnail"

export default function Experience () {
    const [dropDown, setDropDown] = useState(false)
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')

    const handleDropDownChange = () => {
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
                onChange={(e) => setJobTitle(e.target.value)}
                    />

                <InputField
                label='Company'
                id='company'
                placeholder="Enter company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                    />

                <InputField
                type="textarea"
                label='Description'
                id='description'
                placeholder="Describe your main tasks"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />


                <button>Save</button>
                <button onClick={handleDropDownChange}>Close</button>

            </form>
        )
    }
    return(
        <SectionThumbnail
        iconSrc='src/assets/briefcase.svg'
        sectionName='Experience'
        onClick={handleDropDownChange}
        openSrc='src/assets/down-arrow.svg'
       />
    )
}