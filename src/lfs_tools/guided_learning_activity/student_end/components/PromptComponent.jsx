import TextContainerCard from '@/global_ui_components/cards/TextContainerCard'

const PromptComponent = ({ inquiry }) => {
    return (
        <>
            <TextContainerCard
                label='Prompt'
                text={inquiry.prompt}
            />
        </>
    )
}

export default PromptComponent