import './App.css';
import { Button } from './Components/Button';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Input } from './Components/Input';
import { Container } from './Components/Container';
import { LoggedIn } from './Components/State/LoggedIn';
import User from './Components/State/User';
import UserTwo from './Components/State/UserTwo';
import { Counter } from './Components/State/Counter';
import { ThemeContextProvider } from './Components/Context/ThemeContext';
import { Box } from './Components/Context/Box';
import { UserContextProvider } from './Components/Context/UserContext';
import {ContextUser} from './Components/Context/ContextUserUser';
import ClassCounter from './Components/Class/ClassCounter';
import { Private } from './Components/Auth/Private';
import { Profile } from './Components/Auth/Profile';
import { List } from './Components/Generics/List';
import { RandomNumber } from './Components/Restriction/RandomNumber';
import { Toast } from './Components/Templateliterals/Toast';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

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
  return (
    <div className="App">
      <Toast position='center'/>
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item => console.log(item))}
      />
      
      <List
          items={[1,2,3]}
          onClick={(item => console.log(item))}
      />

      <List 
        items = {[
          {
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            first: 'Clark',
            last: 'Kent',
          },
          {
            first: 'Princess',
            last: 'Diana'
          }                   
        ]}
        
        onClick={(item => console.log(item))}
      /> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* <ClassCounter message='The count value is'/> */}
      {/* <UserContextProvider>
        <ContextUser />
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Counter/> */}
      {/* <UserTwo/> */}
      {/* <User/> */}
      {/* <LoggedIn/> */}

      {/* <Container styles={{border:'1px solid black', padding:'1rem'}}/> */}

      {/* <Input value='' handleChange={event => console.log(event)}/> */}

      {/* <Button
        handleClick = {(event, id) => {
          console.log('Button Clicked', event, id)
        }}

      /> */}
      {/* <Greet name='Daniel' isLoggedIn={true}/> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dispario!</Heading>
      </Oscar> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Status status = 'error'/> */}
      {/* <Greet name='Daniel' messageCount={20} isLoggedIn={false}/> */}
      {/* <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
    </div>
  );
}

export default App;
