import { TextInput } from "@/global_ui_components/form/TextInput"
import MediaUploads from "./media_section/MediaUploads"
import ResponseConfig from "./response_section/ResponseConfig"


const InquiryDetailForm = () => {
  return (<>
    <TextInput fieldName='context' label='Context' placeholder='Context for the inquiry' textArea compact />
    <TextInput fieldName='prompt' label='Prompt' placeholder='Prompt for the inquiry' textArea compact />
    <MediaUploads />
    <ResponseConfig />
  </>)
}

export default InquiryDetailForm