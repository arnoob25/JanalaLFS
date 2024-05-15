import { ButtonGhost } from "@/global_ui_components/ui/button"
import { Checkbox } from "@/global_ui_components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/global_ui_components/ui/collapsible"
import { Input } from "@/global_ui_components/ui/input"
import { Label } from "@/global_ui_components/ui/label"
import { Switch } from "@/global_ui_components/ui/switch"
import { TextareaWithLabel } from "@/global_ui_components/ui/textarea"
import { TypographyP } from "@/global_ui_components/ui/typography"
import { Plus } from "lucide-react"


const InquiryDetailForm = () => {
  return (
    <>
      <div>
        <Label htmlFor='goal'>Goal</Label>
        <Input type='text' id='goal' placeholder='goal of the inquiry' />
      </div>
      <div>
        <TextareaWithLabel label="Narrative" placeholder="Describe how the narrative will unfold in the inquiry" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <Label htmlFor="originateBranch">Originate Branches</Label>
          <Switch id="originateBranch" />
        </div>
        <Collapsible className="flex flex-col gap-5">
          <CollapsibleContent className="flex flex-col gap-4">
            <div>
              <TypographyP text="Branch 1" small muted />
              <Input type='text' id='branch1' placeholder='Title of Branch 1' />
              <Checkbox muted label='Should Attempt' />
            </div>
            <div>
              <TypographyP text="Branch 2" small muted />
              <Input type='text' id='branch2' placeholder='Title of Branch 2' />
              <Checkbox muted label='Should Attempt' />
            </div>
            <ButtonGhost className='w-full mt-2.5 items-center gap-1'>
              <Plus size={18} />
              Add Branch
            </ButtonGhost>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  )
}

export default InquiryDetailForm