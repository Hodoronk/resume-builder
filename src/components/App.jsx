import { useState } from 'react';
import ClearOrLoad from './ClearOrLoad.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import ResumeGenereal from './Resume-General.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import clearEducationField from './utils.js';
import EducationSection from './EducationSection.jsx';

export default function App () {

  // Personal info input
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  
  // Handle education input and saving
  const [savedEducation, setSavedEducations] = useState([]);
  const [education, setEducation] = useState({
    degree: '',
    school: '',
    city: '',
    country: '',
    from: '',
    until: '',
  })

  const handleEducationChange = (field, value) => {
    setEducation((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleEducationSave = () => {
    setSavedEducations((prevEducations) => ([... prevEducations, education]));
    clearEducationField(setEducation);
  }






  // Experience input and saving
  const [experience, setExperience] = useState({
    jobTitle: '',
    company: '',
    location: '',
    description: '',
    from: '',
    until: '',
  })
  const handleExperienceChange = (field, value) => {
    setExperience((prevInfo) => ({...prevInfo, [field]: value}))

  }
  



  return (
      <div id="container">
        <div id="form">
          <ClearOrLoad />
          <GeneralInfo personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfoChange} />
          <Education education={education} onEducationChange={handleEducationChange} onSaveEducation={handleEducationSave}/>
          <Experience  experience={experience} onExperienceChange={handleExperienceChange} />
          <Skills />
        </div>
        <div id="resume">
        <div id="resume-paper">
          <ResumeGenereal  personalInfo={personalInfo} />
          <EducationSection savedEducations={savedEducation} />
          <ExperienceSection experience={experience} />
          </div>
        </div>
      </div>
  );
}
