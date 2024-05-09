import TextContainerCard from '@/global_ui_components/cards/TextContainerCard'

const PromptComponent = ({ inquiry }) => {
    return (
        <>{inquiry.prompt.length > 0
            ? <TextContainerCard
                label='Prompt'
                text={inquiry.prompt}
            />
            : null}
        </>
    )
}

export default PromptComponent