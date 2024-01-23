import InputField from "./inputField"

export default function FromUntil() {
    return(
        <div className="from-until">
            <div>
                <span>From</span>
            <InputField
                type="date"
                id='from-input'


            />
            </div>
            <div>
                <span>Until</span>
                <InputField
                type='date'
                id='until-input'

                />
            </div>


        </div>
    )
}