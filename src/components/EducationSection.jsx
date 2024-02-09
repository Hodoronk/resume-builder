export default function EducationSection({ savedEducations }) {
    return (
        <>
            <div className='resume-section'>
                <h2 className='section-title'>Education</h2>
            </div>
            {savedEducations.map((education, index) => (
                <div key={index} className="section-details">
                    <div className="section-dates">
                        <span>{education.from} - {education.until}</span>
                        <span>{education.city}, {education.country}</span>
                    </div>
                    <div className="section-stats">
                        <h4>{education.degree}</h4>
                        <span>{education.school}</span>
                    </div>
                </div>
            ))}
        </>
    );
}
