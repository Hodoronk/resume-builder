    import InputField from './inputField';

export function GeneralInfo({ personalInfo, onPersonalInfoChange }) {
  const { firstName, lastName, email, phoneNumber, address } = personalInfo;

  return (
    <form>
      <h2>Personal Info</h2>
      <InputField

        label="First name"
        id="first-name"
        placeholder="First name"
        value={firstName}
        onChange={(e) => onPersonalInfoChange('firstName', e.target.value)}

      />

<InputField
        label="Last name"
        id="last-name"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => onPersonalInfoChange('lastName', e.target.value)}
      />

<InputField
        label="Email address"
        id="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => onPersonalInfoChange('email', e.target.value)}
        maxLength={30}
      />

<InputField
        label="Phone number"
        id="phone-number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => onPersonalInfoChange('phoneNumber', e.target.value)}
        maxLength={12}
      />

<InputField
        label="Address"
        id="address"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => onPersonalInfoChange('address', e.target.value)}
        maxLength={50}
      />

    </form>
  );
}





export function ResumeGenereal({ personalInfo }) {
  const { firstName, lastName, email, phoneNumber, address } = personalInfo;

  return (
    <div id = 'resume-top'>
      <h5>{firstName} {lastName}</h5>

      <div id ='personal-details'>


      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      {email}</span>


      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
        {phoneNumber}</span>


      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
  <polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
        {address}</span>
      </div>


    </div>
  );
}