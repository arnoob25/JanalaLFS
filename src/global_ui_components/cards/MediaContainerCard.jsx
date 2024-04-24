
const MediaContainerCard = ({ children }) => {
    return (
        <>
            <div className="bg-[var(--card)] rounded-xl border-2 p-2">
                {children}
            </div>
        </>
    )
}

export default MediaContainerCard