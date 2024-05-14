const RoundedCornerFrame = ({ children, radius = 'none', gap='2', className = '' }) => {
  return (
    <div className={`rounded-${radius} flex flex-wrap gap-${gap} bg-[var(--card)] ${className}`}>
      {children}
    </div>
  )
}

export default RoundedCornerFrame