const BasicPageContainer = ({ children, desktopOnly = false, previewMode = false, wide = false }) => {
  const maxWidthClass = wide ? 'max-w-screen-2xl' : 'max-w-screen-xl';
  return (
    <div className={`flex flex-col gap-5 w-full ${maxWidthClass} ${previewMode ? 'max-h-fit' : `mx-auto py-5 ${desktopOnly ? 'max-h-screen' : 'h-fit md:h-screen'}`}`}>
      {children}
    </div>
  );
};

export default BasicPageContainer;