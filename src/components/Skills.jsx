import { useState } from "react";
import Skill from "./skill";

export default function Skills() {
    const [skillVisibility, setSkillVisibility] = useState(true)

    const handleDelete = () => {
        setSkillVisibility(false)
    }


    return(

        <form id ='skills-form'>
            <h3>Skills</h3>
            {skillVisibility && <Skill onDelete={handleDelete} /> }
            <button
            id ='plus-btn'><img src="src/assets/plus.svg" alt="" /></button>
        </form>

    )
}