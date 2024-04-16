
const MediaContainerCard = ({ children }) => {
    return (
        <>
            <div className="border-2 border-var(--border) rounded-xl">
                {children}
            </div>
        </>
    )
}

export default MediaContainerCard