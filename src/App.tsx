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
      <UserTwo/>
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
