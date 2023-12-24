import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const UserTwo = () => {
    const [User, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin  = () => {
        setUser({
            name: 'Daniel',
            email: 'danonsombi@gmail.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {User?.name}</div>
            <div>User email is {User?.email}</div>
        </div>
    )
}

export default UserTwo
