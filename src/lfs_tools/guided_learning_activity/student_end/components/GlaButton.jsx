
import { Button } from "@/global_ui_components/ui/button";

const GlaButton = ({ label, isSecondary = false, onClick, disabled }) => {
    return (
        <div className="md:mt-auto ml-auto">
            <Button variant={isSecondary ? 'secondary' : ''} onClick={onClick} disabled={disabled}>{label}</Button>
        </div>
    )
}

export default GlaButton