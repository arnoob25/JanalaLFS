import GlaPage from './lfs_tools/guided_learning_activity/student_end/pages/GlaPage'
import GlaAuthoringWizard from './lfs_tools/guided_learning_activity/teacher_end/pages/GlaAuthoringWizard'

function App() {

  return (
    <>
      <div className='sm:h-screen flex flex-col-1 bg-[var(--background)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <GlaAuthoringWizard />
      </div>
    </>
  )
}

export default App