import { TypographySmall } from "@/global_ui_components/ui/typography"


const MediaHeader = ({ caption }) => {
  return (
    <div>
      <TypographySmall text={caption} />
    </div>
  )
};

export default MediaHeader;