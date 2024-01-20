import { useState } from "react"

export default function Experience () {
    const [dropDown, setDropDown] = useState(false)
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')

    const handleDropDownChange = () => {
        setDropDown(!dropDown)
    }
    const handleJobChange = (e) => {
        setJobTitle(e.target.value)
    }
    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    if(dropDown) {
        return(
            <form action="">
                <h3>Job Title</h3>
                <input type="text"
                placeholder="Enter job title"
                value={jobTitle}
                onChange={handleJobChange}
                />

                <h3>Company</h3>
                <input type="text"
                placeholder="Enter company name"
                value={company}
                onChange={handleCompanyChange}
                />

                <h3>Description</h3>
                <textarea
                placeholder="Describe your main responsibilities"
                value={description}
                onChange={handleDescriptionChange}
                ></textarea>

                <h3>Start date</h3>
                <input type="date" />
                <h3>End date</h3>
                <input type="date" />


                <button>Save</button>
                <button onClick={handleDropDownChange}>DropdownButton</button>

            </form>
        )
    }
    return(
        <div>
            <h3>Experience</h3>
            <button onClick={handleDropDownChange}>DropdownButton</button>
        </div>
    )
}