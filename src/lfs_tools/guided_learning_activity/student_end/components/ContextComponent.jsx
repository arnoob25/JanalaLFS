import TextContainerCard from "@/lfs_tools/shared_components/cards/TextContainerCard";

const ContextComponent = ({ inquiry }) => {
    return (
        <TextContainerCard
            label='Context'
            text={inquiry.context_text}
        />
    );
};

export default ContextComponent;
