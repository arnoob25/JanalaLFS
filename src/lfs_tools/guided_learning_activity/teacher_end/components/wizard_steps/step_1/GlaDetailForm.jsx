
import { Combobox } from "@/global_ui_components/ui/combobox"
import { Input } from "@/global_ui_components/ui/input"
import { Label } from "@/global_ui_components/ui/label"
import { TextareaWithLabel } from "@/global_ui_components/ui/textarea"

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

const smallILOs = [
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

const GlaDetailForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Label htmlFor={'title'}>Title</Label>
        <Input type='text' id='title' placeholder='Title of the Gla' />
      </div>

      <div>
        <Label htmlFor={'primaryIlo'}>Primary ILO</Label>
        <Combobox selectionType={'ILO'} data={ILOs} id='primaryIlo' />
      </div>

      <div>
        <Label htmlFor={'secondaryIlo'}>Secondary ILO</Label>
        <Combobox selectionType={'ILO'} data={smallILOs}  id='secondaryIlo' />
      </div>

      <div>
        <TextareaWithLabel label="Narrative" placeholder="Describe the narrative" />
      </div>
    </div>
  )
}

export default GlaDetailForm