import { useState } from "react";

export default function GeneralInfo() {
    const [dropdownArrow, setDropdownArrow] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleDropdownChange = () => {
        setDropdownArrow(!dropdownArrow)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }


        if(dropdownArrow) {
            return(
                <form>
                    <h2>Personal Info</h2>
                    <h3>First name:</h3>
                    <input type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    />
                    <h3>Last name:</h3>
                    <input type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    />
                    <h3>Email address:</h3>
                    <input type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    />
                    <h3>Phone number:</h3>
                    <input type="text"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    />

                    <h3>Address: </h3>
                    <input type="text"
                    placeholder="Address"
                    value={address}
                    onChange={handleAddressChange}
                    />


                    <button
                    onClick={handleDropdownChange}
                    >BACKUP ICON</button>
                </form>
            )
        }
        return(
        <div>
            <h2>Personal Info</h2>
            <button onClick={handleDropdownChange}>
                DROPDOWN ICON
            </button>
        </div>
        )
    
}