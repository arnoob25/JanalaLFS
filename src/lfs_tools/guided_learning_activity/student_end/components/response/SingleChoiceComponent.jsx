/* eslint-disable react/prop-types */
import { Label } from "@/global_ui_components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/global_ui_components/ui/radio-group"


const SingleChoiceComponent = ({ choices }) => {
  

    const options = choices.map(
        choice => {
            return (
                <div className="flex items-center space-x-2" key={choice.id}>
                    <RadioGroupItem value={choice.id} id={choice.id} />
                    <Label htmlFor={choice.id}>
                        {choice.label}
                    </Label>
                </div>
            )
        }
    )

    return (
        <>
            <RadioGroup>
                {options}
            </RadioGroup>
        </>
    )
}

export default SingleChoiceComponent