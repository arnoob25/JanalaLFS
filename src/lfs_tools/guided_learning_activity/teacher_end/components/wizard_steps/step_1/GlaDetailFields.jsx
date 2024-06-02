import { TextInput } from "@/global_ui_components/form/TextInput"
import { ComboboxField } from "@/global_ui_components/form/Combobox"
import { FormContainer } from "@/global_ui_components/containers/FormContainer"

// TODO: think of a way to display long ILOs on the popover with a sizeable width
const ILOs = [
  {
    value: "Define the steps involved in a specialized",
    label: "Define the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery procDefine the steps involved in a specialized surgery and recovery processes and other useless stuff among many other things and we're writing maybe we'll write the entire book",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const GlaDetailFields = () => {
  return (
    <FormContainer sidebar scroll>
      <TextInput
        fieldName='glaTitle'
        label='Title'
        placeholder='Title of the Gla'
      />

      <ComboboxField
        fieldName='primaryIlo'
        label='Primary ILO'
        selectionType={'ILO'}
        options={ILOs}
        id='primaryIlo'
      />
      <ComboboxField
        fieldName='secondaryIlo'
        label='Secondary ILO'
        selectionType={'ILO'}
        options={ILOs}
        id='secondaryIlo'
      />
      <TextInput textArea
        fieldName='glaNarrative'
        label='Narrative'
        placeholder='Describe the narrative'
      />
    </FormContainer>
  )
}

export default GlaDetailFields