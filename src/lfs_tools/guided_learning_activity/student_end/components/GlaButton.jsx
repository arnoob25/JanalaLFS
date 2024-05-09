
import { Button } from "@/global_ui_components/ui/button";

const GlaButton = ({ label, onClick, disabled }) => {
    return (
        <div className="mt-5 md:mt-auto ml-auto mb-5">
            <Button onClick={onClick} disabled={disabled}>{label}</Button>
        </div>
    )
}

export default GlaButton