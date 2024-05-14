import { Combobox } from "@/global_ui_components/ui/combobox"
import { Input } from "@/global_ui_components/ui/input"
import { Label } from "@/global_ui_components/ui/label"
import { Switch } from "@/global_ui_components/ui/switch"
import { TextareaWithLabel } from "@/global_ui_components/ui/textarea"

const methods = [
  { value: 'tab', label: 'Tab' },
  { value: 'carousel', label: 'Carousel' },
]

const mediaTypes = [
  { value: 'video', label: 'Video' },
  { value: 'data_table', label: 'Table' },
  { value: 'js_module', label: 'JS Module' },
  { value: 'svg_html', label: 'SVG' },
]

const responseTypes = [
  { value: 'choice', label: 'Choice' },
  { value: 'choice_branch', label: 'Branch' },
  { value: 'choice_ambigious', label: 'Ambigious Choice' },
  { value: 'text', label: 'Text' },
  { value: 'media', label: 'Media' },
]

const InquiryDetailForm = () => {
  return (
    <>
      <div>
        <TextareaWithLabel label="Context" placeholder="Context for the Inquiry" compact />
      </div>
      <div>
        <TextareaWithLabel label="Prompt" placeholder="Prompt for the Inquiry" compact />
      </div>
      <div>
        <Label htmlFor='media_type'>Media Type</Label>
        <Combobox selectionType={'Media Type'} data={mediaTypes} id='media_type' />
      </div>
      <div>
        <Label htmlFor='media'>Media</Label>
        <Input type='file' id='media' />
      </div>
      <div>
        <Label htmlFor='media_switch'>Media Switch Method</Label>
        <Combobox selectionType={'Switch Method'} data={methods} id='media_switch' />
      </div>
      <div>
        <Label htmlFor='response_type'>Response Type</Label>
        <Combobox selectionType={'Response Type'} data={responseTypes} id='response_type' />
      </div>
      <div className="flex justify-between items-center">
        <Label htmlFor="require_explanation">Require Explanation</Label>
        <Switch checked={true} id="require_explanation" />
      </div>
      <div className="flex justify-between items-center">
        <Label htmlFor="require_repetition">Require Repetition</Label>
        <Switch checked={true} id="require_repetition" />
      </div>
    </>
  )
}

export default InquiryDetailForm