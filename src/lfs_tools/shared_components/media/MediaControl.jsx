import { Separator } from "@/global_ui_components/ui/separator";

export const MediaControl = ({ controls = [], children }) => {
    return (
        <div className="flex flex-wrap flex-auto mr-auto gap-1 md:gap-2 items-center">
            <Separator />
            {controls.length > 0 ? controls : null}

            {children}
        </div>
    )
}

export default MediaControl