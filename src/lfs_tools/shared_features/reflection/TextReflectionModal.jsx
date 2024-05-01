import { ResponsiveModal } from "@/global_ui_components/ui/dialog"
import { useEffect, useState } from "react"


const TextReflectionModal = ({ reflections }) => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    setIsModalOpen(true)
  }, [reflections])

  return (
    <>
      <ResponsiveModal isOpen={isModalOpen} onClose={toggleModal}>
        <div><p>I needs a hero</p></div>
      </ResponsiveModal>
    </>
  )
}

export default TextReflectionModal