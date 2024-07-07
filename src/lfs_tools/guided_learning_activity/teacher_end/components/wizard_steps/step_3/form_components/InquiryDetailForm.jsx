import { TextInput } from "@/global_ui_components/form/TextInput"
import MediaUploads from "./media_section/MediaUploads"
import ResponseConfig from "./response_section/ResponseTypes"

const InquiryDetailForm = (fieldItemNamePrefix) => {

  return (<>
    <TextInput fieldName={`${fieldItemNamePrefix}.context`} label='Context' placeholder='Context for the inquiry' textArea compact />
    <TextInput fieldName={`${fieldItemNamePrefix}.prompt`} label='Prompt' placeholder='Prompt for the inquiry' textArea compact />
    <MediaUploads fieldNamePrefix={fieldItemNamePrefix} />
    <ResponseConfig fieldNamePrefix={fieldItemNamePrefix} />
  </>)
}

export default InquiryDetailForm