export default function SaveAndBack(saveOnClick, backOnClick) {
    return(
        <div className="form-buttons">
            <button
            onClick={saveOnClick}
            id='save-button'
            >Save</button>
            <button
            id='back-button'
            onClick={backOnClick}
            ><img src="src/assets/up-arrow.svg" alt="up-icon" className="up-icon" /></button>
        </div>
    )
}