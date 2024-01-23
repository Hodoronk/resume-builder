
import InputField from "./inputField";

export default function Skill({onDelete}) {
    return(
        <div id ='skill-div'>
            <InputField
            id='skill'
            placeholder="Enter your skill"

            />
            <button
            onClick={onDelete}
            id='delete-button'
            ><img src="src/assets/trash-2.svg" alt="" /></button>
        </div>
    )
}