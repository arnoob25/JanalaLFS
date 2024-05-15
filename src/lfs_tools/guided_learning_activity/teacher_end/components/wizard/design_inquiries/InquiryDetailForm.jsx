import { ButtonGhost } from "@/global_ui_components/ui/button"
import { Checkbox } from "@/global_ui_components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { Combobox } from "@/global_ui_components/ui/combobox"
import { Input } from "@/global_ui_components/ui/input"
import { Label } from "@/global_ui_components/ui/label"
import { Switch } from "@/global_ui_components/ui/switch"
import { TextareaWithLabel } from "@/global_ui_components/ui/textarea"
import { TypographyP } from "@/global_ui_components/ui/typography"
import { Plus } from "lucide-react"

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
  //{ value: 'media', label: 'Media' },
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
        <Label htmlFor='media'>Media</Label>
        <Collapsible id="media">
          <div>
            {/** display label when adding multiple media <TypographyP text='Media 1' small muted /> */}
            <Combobox selectionType={'Media Type'} data={mediaTypes} />
            <Input type='file' className='mt-1' />
          </div>
          <CollapsibleContent className="mt-5">
            <div className="flex flex-col gap-5">
              <div>
                <TypographyP text='Media 2' small muted />
                <Combobox selectionType={'Media Type'} data={mediaTypes} />
                <Input type='file' className='mt-1' />
              </div>
            </div>
          </CollapsibleContent>
          <CollapsibleTrigger className="flex w-full justify-center mt-5 items-center gap-1">
            <Plus size={18} />Add Media
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-6"><div>
            <TypographyP text="Media Switch Method" small muted />
            <Combobox selectionType={'Switch Method'} data={methods} id='media_switch' />
          </div></CollapsibleContent>
        </Collapsible>
      </div>

      <div>
        <Label htmlFor='response'>Response</Label>
        <Collapsible id="response" className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <Combobox selectionType={'Response Type'} data={responseTypes} />
            <CollapsibleTrigger>
              expand
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col gap-5">
            <div>
              <TypographyP text="Choice 1" small muted />
              <Input type='text' id='choice1' placeholder='Title of Choice 1' />
              <Checkbox muted label='Correct choice' />
            </div>
            <div>
              <TypographyP text="Choice 2" small muted />
              <Input type='text' id='choice2' placeholder='Title of Choice 2' />
              <Checkbox muted label='Correct choice' />
            </div>
            <ButtonGhost className='w-full mt-2.5 items-center gap-1'>
              <Plus size={18} />
              Add Choice
            </ButtonGhost>
          </CollapsibleContent>
        </Collapsible>
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