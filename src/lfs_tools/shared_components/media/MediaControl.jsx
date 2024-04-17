import { Separator } from "@/global_ui_components/ui/separator";

export const MediaControl = ({ controls }) => {
    return (
        <div className="flex flex-wrap flex-auto mr-auto gap-1 md:gap-2 items-center">
            <Separator />
            {controls}
        </div>
    )
}

export default MediaControl