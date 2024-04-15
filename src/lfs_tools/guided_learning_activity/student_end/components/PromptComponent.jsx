import TextContainerCard from '@/lfs_tools/shared_components/cards/TextContainerCard'

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