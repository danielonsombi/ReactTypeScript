import { createContext, useState } from "react"

export type AuthUser = {
    name: string,
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

//Create the context
export const UserContext  = createContext({} as UserContextType)

//Create the context that provides the user value: 
//Destructure the props to access the children that are of type UserContextProvider.
//Typically, the user context is to manage the authenticated state of the user. The user context should hold the user information like name, email, user id etc.
export const UserContextProvider = ({children}: UserContextProviderProps) => {
    //By default user value is null and auth user if logged in.
    const [user, setUser] = useState<AuthUser|null>(null)

    //Return the context. and should return the logged in user and the function to set user on log in or out.
    //The value that should be passed to the children is the user and the setuser which must be defined as types. If not then the system returns an error.
    //Hence the UserContextType above. To get the value of the setUser, hover on it and copy what typescript defines it to be.
    //When defining the context, the possible contexts should also be defined. It can be null initially but in the future, likely to change to UserContextType as declared in UserContext.
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}


