

const GlaResponseContainer = ({ children }) => {
    return (
        // the bottom margin ensures the gap between the button and choices when we have many choices in larger screens
        <div className="flex flex-col h-full md:mb-5">
            {children}
        </div>
    )
}

export default GlaResponseContainer