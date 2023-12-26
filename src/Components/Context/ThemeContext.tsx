import {createContext} from "react";
import { theme } from './theme'

type ThemeContextProviderProps = { 
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

//Destructure the props passed down and set the type to ThemeContextProviderProps
export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}