import TextContainerCard from "@/global_ui_components/cards/TextContainerCard";

const ContextComponent = ({ inquiry }) => {
    return (
        <TextContainerCard
            label='Context'
            text={inquiry.context}
        />
    );
};

export default ContextComponent;
