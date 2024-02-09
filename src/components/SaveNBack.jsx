export default function SaveAndBack({ onSave, backOnClick }) {
const handleSaveClick = (event) => {
  event.preventDefault();
  onSave();
}

    return (
      <div className="form-buttons">
        <button onClick={handleSaveClick} id="save-button">
          Save
        </button>
        <button id="back-button" onClick={backOnClick}>
          <img src="/assets/up-arrow.svg" alt="up-icon" className="up-icon" />
        </button>
      </div>
    );
  }
  