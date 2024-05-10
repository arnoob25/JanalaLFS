import { useRef } from "react";
import selectGlaResponseComponent from "../helpers/glaResponseHelpers"
import TextReflectionModal from "@/lfs_tools/shared_features/reflection/TextReflectionModal";


const ResponseComponent = ({ inquiry, onResponse }) => {

    const attempts = useRef([]) // TODO: maybe we can use refs instead
    const reflections = useRef([]) // TODO: maybe we can use refs instead

    const promptReflection = (choicesToReflectOn) => {

        if (attempts.current[0].isCorrect) { // we'll check whether the first attempt is correct or not
            reflections.current = choicesToReflectOn;
        }
    };

    return (
        // the bottom margin ensures the gap between the button and choices when we have many choices in larger screens
        <>{inquiry.response_type
            ? <div className="flex flex-col h-full md:mb-5">
                {selectGlaResponseComponent(inquiry, onResponse)}
            </div>
            : null}


            {reflections.length > 0
                ? <TextReflectionModal reflections={reflections} />
                : null}
        </>
    )
}

export default ResponseComponent