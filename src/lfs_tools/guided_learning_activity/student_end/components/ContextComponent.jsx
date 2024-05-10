import TextContainerCard from "@/global_ui_components/cards/TextContainerCard";

const ContextComponent = ({ inquiry }) => {
    return (
        <>{inquiry.context.length > 0
            ? <TextContainerCard
                label='Context'
                text={inquiry.context}
            />
            : null}
        </>
    );
};

export default ContextComponent;
