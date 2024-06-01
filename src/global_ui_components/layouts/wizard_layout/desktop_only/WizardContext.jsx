import { createContext, useState } from "react";


// context provider that wraps item list, item preview, and item detail
export const WizardFocusAreaContext = createContext(null)

export const WizardFocusAreaContextProvider = ({ children, value = {} }) => {
    const [selectedItemId, setSelectedItemId] = useState(null)

    return (
        <WizardFocusAreaContext.Provider value={{ ...value, selectedItemId, setSelectedItemId }}>
            {children}
        </WizardFocusAreaContext.Provider >
    )
}


export const ItemDetailContext = createContext(null);


