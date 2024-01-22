import { useState } from "react";
import InputField from "./inputField";
export default function GeneralInfo() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

            return(
                <form>
                    <h2>Personal Info</h2>
                    <InputField
                        label='First name'
                        id='first-name'
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <InputField
                        label='Last name'
                        id='last-name'
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    
                    <InputField
                        label='Email address'
                        id='email'
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        label='Phone number'
                        id='phone-number'
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <InputField
                        label='Address'
                        id='address'
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />


                </form>
            )
        }

    
