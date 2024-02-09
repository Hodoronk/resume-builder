import InputField from "./inputField"

export default function FromUntil({changeFrom, changeUntil}) {
    return(
        <div className="from-until">
            <div>
                <span>From</span>
            <InputField
                type="text"
                id='from-input'
                onChange={changeFrom}
            />
            </div>
            <div>
                <span>Until</span>
                <InputField
                type='text'
                id='until-input'
                onChange={changeUntil}
                />
            </div>


        </div>
    )
}