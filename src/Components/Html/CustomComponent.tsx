//Assume this component need the exact same props of the greet component that accepts three props: name, messageCount, isLoggedIn.
//Assume we can not export the prop types from the greet component. We can use the React.ComponentProps to extract the props of the greet component:
//Once extracted, one can then access the same props as those in the greet component.

import React from 'react'
import { Greet } from '../Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default CustomComponent
