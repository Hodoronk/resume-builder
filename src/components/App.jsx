import { useState } from 'react';
import {GeneralInfo, ResumeGenereal} from './GeneralInfo.jsx';
import {Education, EducationSection} from './Education.jsx';
import {Experience, ExperienceSection} from './Experience.jsx';
import {Skills,  SkillSection } from './Skills.jsx';
import { checkFields } from './utils.js';
import { clearEducationField, clearExperienceField } from './utils.js';


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
      if(checkFields(education)) {
        setSavedEducations((prevEducations) => ([... prevEducations, education]));
        clearEducationField(setEducation);
      }
  }

  // Experience input and saving
  const [savedExperience, setSavedExperience] = useState([]);
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

  const handleExperienceSave = () => {
    if(checkFields(experience)) {
      setSavedExperience((prevExperience) => ([... prevExperience, experience]));
      clearExperienceField(setExperience)
    }
  }

  const [skills, setSkills] = useState([])
  
  return (
      <div id="container">
        <div id="form">
          <GeneralInfo personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfoChange} />
          <Education education={education} onEducationChange={handleEducationChange} onSaveEducation={handleEducationSave}/>
          <Experience  experience={experience} onExperienceChange={handleExperienceChange} onSaveExperience={handleExperienceSave} />
          <Skills setSkills={setSkills} />
        </div>
        <div id="resume">
        <div id="resume-paper">
          <ResumeGenereal  personalInfo={personalInfo} />
          <EducationSection savedEducations={savedEducation} />
          <ExperienceSection savedExperiences={savedExperience} />
          <SkillSection skills={skills} />
          </div>
        </div>
      </div>
  );
}
