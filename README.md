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


