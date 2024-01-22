export default function SectionThumbnail({iconSrc, sectionName, onClick, openSrc}) {
    return (
        <div className="form-section">
            <img src={iconSrc} alt="sectionName" className="icon" />
            <h3>{sectionName}</h3>
            <button
            onClick={onClick}
            >
            <img src={openSrc} alt="openSection" className="icon" />
            </button>
        </div>
    )
}