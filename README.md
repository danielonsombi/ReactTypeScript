# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

REACT TYPESCRIPT:

Why Typescript?
One can just use Javascript to write React code but typescript can improve the overal react experience.
With static type checking, you get to learn about potential bugs as you're typing the code, than heading to the browser and figuring out at runtime.
It provides a way to describe the shape of an object hence providing better documentation and autocomplete.
Makes maintenance and refactoring of large code bases much easier.

Some of the misconceptions are:
1. TypeScript is just frustrating most of the times
2. I have to write a lot more code than usual and the compiler keeps complaining.
3. It doesn't seem to be productive.


However, it is an initial investment that pays in the long run. Once you get the hang of it, the benefit you get outweighs the time you spend on it.


Note that, with the ctypescript template, the App.js and index.js files no longer exist in the src folder. Instead, we have app.tsx and index.tsx files. The index.tsx is the entry point to our app that mounts the app.tsx to the room DOM. App.tsx contains the app component which is the root component.
When working with the tsx, this should be maintained throughout the implementation. If one falls back to using the .js extension, the app breaks.

If you hover on the App() component, it tells you it is a function that returns a JSX element. This is refered to as type inferrence.

Typing Props:
When passing down props in type script, one must specify the structure of the props.
The code below return an error on the props parameter:

import React from 'react'

export const Greet = (props) => {
  return (
    <div>
        <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  )
}

parameter 'props' implicitly has an 'any' type.
We therefore need a way to inform the type of props to typescript. This is done using the type keyword.

The code can therefore be re-written as:

import React from 'react'

type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  )
}

Seems like extra code, but this does give us two benefits:
1. when you type props the system auto suggests the props. You don't have to think what kind of props you submitted.
2. When invoking the component in apps.tsx, if you try passing in any other data type other than string, typescript points that out for you.

Use types when building applications and interfaces when building libraries. Therefore for this series we will use types for it will be easier to follow along.

Basic props:
If the object is enriched and a new key and value is added, the app.tsx will show an error since the new prop has not been passed down as a prop. When trying to add the prop, typescript auto suggests the key and value.
The same applies when working with objects:

type PersonProps = {
    name: {
        first: string
        last: string
    }
}
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

Typing an array:
Consider personList component
If working with an array of objects:
const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

The respective types should be implemented in the component. To create the type then define the array of objects using the object literal and square bracket syntax: names: {}[] as:

type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

Advanced props:
You might be required to render different JSX code to the DOM depending on the prop passed in. When changing the status, our code can handle loading..., success and error but out type can allow any string:
type StatusProps = {
    status: string
}
export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error')
    {
        message = 'Error fetching data'
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}

We could pass in a completely random string and typescript will not flag it as an error. To address this we can pass a string of literal strings against which react will run validations..

If the type is re-written as below:

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

type script will throw an error if any other value is submitted as a prop.

Children props that can be passed to a react component:
One might want to pass a string to the oppening and closing tags of a component. With type script, it is not possible to do this directly. The work around is to create props with children prop.

In typescript, one cannoyt just pick the children to a component, a type for those children must be specified then passed in to the component as below:


type HeadingProps = {
    children: string
}
export const Heading = (props: HeadingProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

such can then be called from the app component as:
<div className="App">
    <Heading>Placeholder text</Heading>
</div>

React.ReactNode:
One can also pass components as children to another component:
On this, the React types package ("@types/react") provides React.reactnode which helps to create react components as children.

Optional Type:
Sometime a component doesn't have to be passed. Say we were to call the greet component from app.tsx in the format below:

import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>
            {props.isLoggedIn ?
            `Welcome ${props.name}! You have ${props.messageCount} unread messages`
            
            : `Welcome Guest`}
        </h2>
    </div>
  )
}


If one of the props is not passed in, typescript throws an error that the prop is missing. To inform typescript that the prop is optional, we add a question mark at the end of the prop name where we define the type.The type now looks like this:

type GreetProps = {
    name: string,
    messageCount?: number
    isLoggedIn: boolean
}

Further to this, you can disstructure the messageCount prop and assign it a default value of 0 as:

const { messageCount = 0 } = props - I.e., if it has a value then use the value else use 0.

The component looks as below:
import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
        <h2>
            {props.isLoggedIn ?
            `Welcome ${props.name}! You have ${messageCount} unread messages`
            
            : `Welcome Guest`}
        </h2>
    </div>
  )
}


Event Props:
We will focus on the two most frequently used events as props. The click and oncchange events:
1. Click Event:
The intention is to have the button to accept the click event as a prop and pass it to the html button element. Initial code:

export const Button = () => {
    return <button>Click</button>
} 

a. At first the click handler does not need any parameter and does not return anything. Hence declared as void. See below:

type ButtonProps = {
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick}>Click</button>
}

and called from app.js as:
    <div className="App">
      <Button
        handleClick = {() => {
          console.log('Button Clicked')
        }}
      />
    </div>

b. If you want an event passed to your click handler the code is changed slighly by passing an event as a parameter and defining the type of the event using a react type (React.MouseEvent<HTMLButtonElement>) This explicitly defines the type of event and that is is a button element. No need to import them since readily available in our environment.


2. OnChange Event:
Input elements will rypically need two props, the input value and onchange handler. The typing process is kinda similar to the button click event type. The difference is that the onchange type takes in two props one for value and the other for change. The formating looks as below:

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input=(props: InputProps)=> {
    return <div><input type="text" value={props.value} onChange={props.handleChange}/></div>
}


Style Props:

export const Container = (props: ContainerProps) => {
    return(
        <div style={{border: '1px solid black', padding: '1rem'}}>
            Text content goes here
        </div>
    )
}
A react component can be created and hard coded styling added to it. However, such can be achieved by passing the styling as a component as opposed to having it hard coded. On the con=mponent, you achieve this by adding the container props type with prop styles. The key for the prop is alway a string but the key can be a number or string e.g., (border: '1px solid black'). There is need to restrict to valid style string. So we use the React.CSSProperties. If you try to pass a value that is not css, typescript will throw an error. The code therefore looks as below:

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return(
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}

And can be called in App.tsx as:
    <div className="App">
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
    </div>

Prop Types and Tips:
1. You can destructure props when defining the component. So far we have defined props within parenthesis and 
used them to access different properties within the object. Such can still be achieved as:
    Initial:
        type InputProps = {
            value: string
            handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        }

        export const Input = (props: InputProps) => {
            return <input type='text' value={props.value} onChange={props.handleChange}>
        }

    Destructured: - Prefer this approach
        export const Input = ({value, handleChange}: InputProps) => {
            return <input type='text' value={value} onChange={handleChange}>
        }

2. Exporting types:
Currently we defined props at the top of all our components. In large components with multiple types you often want to move the types to a separate file and import them where necessary. Forinstance the person file:\

type PersonProps = {
    name: {
        first: string
        last: string
    }
}
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

can be re-written using two files:
Person.types.tsx:

export type PersonProps = {
    name: {
        first: string
        last: string
    }
}

and the Person.tsx:

import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

3. Reusing types:
Can extract types and use it in multiple places. For instance, Person type can be recreated as:

export type Name = {
    first: string
    last: string
}

export type PersonProps = {
    name: Name
}

With such, we can the rewrite the PersonList component from:

import React from 'react'

type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
            <h2 key={name.first}>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}

to:

import React from 'react'
import {Name} from './Person.types'

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
            <h2 key={name.first}>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}

Which makes the code simple, readable and reusable. Also avoids duplication.

Typing Hooks:
1. useState Hook:
Without Typescript codey, we can use the useState hook as below:

import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin  = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}
in the code above, is you pass in a 0 to setIsLoggedIn, typescript will throw an error. As opposed to vanilla JavaScript that treats 0 and false as the same, typescript does not. But the above code still works inspite of being in typescript becuase of type inferencing. TypeScript is smart enough to infer what the state variable type is based on the initial value that is passed in. Since false, then will only allow boolean values. For simple values, typescript thorugh inferencing can figure them out. However this is not the case with complex types or don't know the value initially but could have a value in future.

When a user accesses a website, by default they are not logged in. The useState is therefore intialized to null. The same applies when logging out. On Login we provide the user and email. Since typescript intialized the value to null, when trying to pass the object with the name and email, typescript will complain. To pacify typescript, we have to specify the type of the state without depending on inferencing.

This is done using the angle brackets as useState<AuthUser | null>(null). This informs typescript that the type can either be null or AuthUser. Hence the code below:
With such, in the JSX we can access the user.name. However, wehn trying to access it, typescript automatically add ? since it can be either null or have a value hence user?.name. The final code look like:

import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [User, setUser] = useState<AuthUser | null>(null)

    const handleLogin  = () => {
        setUser({
            name: 'Daniel',
            email: 'danonsombi@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {User?.name}</div>
            <div>User email is {User?.email}</div>
        </div>
    )
}

export default User

useState Type Assertion:
The assumption of user can either be null or have a value is always right and by default the typescript syntax. But as a dev, you'd always know that typescript will have a value or not. In such cases you can use the assertion that the user will always be of type AuthUser and cannot be null. For Type assertion we use the 'as' keyword. In this way you can access the name and email without a check see UserTwo in the state folder.

useReducer Hook:
For complex implementations, the useReducer hook is used instead of the the useState hook.
With the useReducer, we must specify the state and action parameters in the reducer function and pass corresponding arguments when making the calls to the function.
Using typescript, the state and action will throw an error since their types have not been specified.

import {useReducer} from 'react'

const initialState = { Count: 0 }

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
           return {
                count: state.count + action.payload
           }
        
           case 'descrement':
            return {count: state.count - action.payload}
    
        default:
            return state;
    }
}


The types must therefore be specified as below:

import {useReducer} from 'react'

type CounterState = {
    count: number
}

type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction)
{
    switch (action.type) {
        case 'increment':
           return { count: state.count + action.payload}
        
        case 'decrement':
            return {count: state.count - action.payload}
    
        default:
            return state;
    }
}

Having the type set to state, means we can pass in any string. But we can change this to use the template literals to ensure correct strings are passed in. Since we know the type can be either increment or decrement we can set it as so.

In some of the types say reset, no payload should be passed in since it is to return the initial state. Explicitly, typescript should be informed of this. If you change the value of payload to 

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset',
    payload?: number
}

The reducer function will throw an error which can be fixed the old versioned way as:

function reducer(state: CounterState, action: CounterAction)
{
    switch (action.type) {
        case 'increment':
           return { count: state.count + (action.payload || 0)}
        
        case 'decrement':
            return {count: state.count - (action.payload || 0)}
        
        case 'reset':
            return initialState
    
        default:
            return state;
    }
}

But the recommended approach should be to create an action type responsible for increment and decrement actions where payload is mandatory. Then create a second action type responsible for reset action. Then create a counter action (using discreminated unions in typescript) which can be either UpdateAction or ResetAction as below:

import {useReducer} from 'react'

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement' | 'reset',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction)
{
    switch (action.type) {
        case 'increment':
           return { count: state.count + action.payload}
        
        case 'decrement':
            return {count: state.count - action.payload}
        
        case 'reset':
            return initialState
    
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type:'increment', payload:10})}>Increment 10</button>
            <button onClick={() => dispatch({type:'decrement', payload:10})}>Decrement 10</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
    )
}


Typescript and React Context:
A very common useContext use case is to provide a them to components. We create a theme.ts with a primary and secondary palette color.
Then create the theme context file as below:

import {createContext} from "react";
import { theme } from './theme'

type ThemeContextProviderProps = { 
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

on the app.tsx, import the themecontext provider and the file to consume the created context:
import {createContext} from "react";
import { theme } from './theme'

type ThemeContextProviderProps = { 
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

Then wrap the box.tsx within the ThemeContextProvider component.

Finally, on box.tsx, import useContext and the ThemeContext. Then create a variable to useContext. With the variable you can access the themes and assign them with the DIV style attribute as below:

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)
    return <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>Theme context</div>
}

It is usually easy when you know the context since typescript through inferencing can then figure out the type of object or information to be passed down. However the context might not be known initially hence need for a way to deal with future values:

Refer to the User.tsx and UserContext.tsx in the Components/Context folder.

With future values, by default, the user is set to null and hence the default context value is also null. Upon log in, the will change to a different type. There is therefore need to handle and define both current and future values in typescript.
We therefore define the AuthUser type and the UserContextTypes which contain user properties and the usestate destructured values respectively.
Since both of them will be null initially and have value later, then use the union type feature to specify this as:

    const [user, setUser] = useState<AuthUser|null>(null)
    export const UserContext  = createContext<UserContextType | null>(null)

We then create the provider with value set to the distructure values of use state and wrap within it the children prop which is of type React.React Node. The code looks as below:


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

export const UserContext  = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser|null>(null)

     return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

Finally, ContextUser.tsx file with the exported context. The final code is as below:

import { useContext } from "react"
import { UserContext } from "./UserContext"

export const ContextUser = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Daniel',
                email: 'danonsombi@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return ( 
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}

We can use type assertion so context is not optional as is at the moment. We achieve this by using the as keyword while defineing the context and types. Since the contrext is always created outside the component whereas its future value is set within a component, type assertion should be used to avoid the checks of whether null or not. The context will therefore be created as:

export const UserContext  = createContext({} as UserContextType)

and the final code modified as:

import { useContext } from "react"
import { UserContext } from "./UserContext"

export const ContextUser = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({
            name: 'Daniel',
            email: 'danonsombi@gmail.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }

    return ( 
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}

useRef Hook:
Primarily used for:
1. Readonly ref for a DOM element
2. Immutable value that can behave as an instance variable

Ref can be used when one wants to set the focus to some specific instance. It can be used together with the useEffect with the empty array as the second parameter so to as a componentDidMount function. with .js, the useRef can be used as below:

import { useRef, useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

however, it throws an error in typescript since the default value is null. This should be handled. To sort this we can use optional chaining as input.current?.focus().
This throws another error that on the focus method, because of the reference type. The type of the DOM element should therefore be specified as:
    const inputRef = useRef<HTMLInputElement>(null). 

If not null, you can use the ! to avoid optional chaining i.e., 
    inputRef = useRef<HTMLInputElement>(null!)

and call it as:
    input.current.focus()

The final code:

import { useRef, useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

For mutable Refs:
Create a variable assigned to useRef and initialize it to null.
When the component mounts, on the useEffect, invoke the setInterval function to increase the timer value by one every second then store it in the intervalRef.current. When the component iunmounts call the stopTimer which clears the interval using the intervalRef.current.

import {useState, useRef, useEffect} from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef(null)

    const stopTimer = () => {
        window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}

By default it has errors. By hovering on the errors you'll get the specific of what needs to be fixed. Since useRef is set to null, interValRef being a number must also be defined. For the stopTimer, typescript sees it as either number or undefined, one can either check if the value interValRef.current has a value before calling the clear interval or use the union type feature to resolve the error as: 
    const interValRef = useRef<number | undefined>(undefined)

The final code:
    import {useState, useRef, useEffect} from 'react'

    export const MutableRef = () => {
        const [timer, setTimer] = useState(0)
        const interValRef = useRef<number | null>(null)

        const stopTimer = () => {
            if (interValRef.current)
                window.clearInterval(interValRef.current)
        }

        useEffect(() => {
            interValRef.current = window.setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)

            return () => {
                stopTimer()
            }
        }, [])

        return (
            <div>
                HookTimer - {timer} - 
                <button onClick={() => stopTimer()}>Stop Timer</button>
            </div>
        )
    }


Therefore for DOM references, you specify the DOM element Type as:
    const inputRef = useRef<HTLMInputElement>

whereas for the mutable References specify the appropriate type e.g.,
    const interValRef = useRef<number | null>(null)







