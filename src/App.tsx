import './App.css';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';

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
      <Greet name='Daniel' isLoggedIn={true}/>
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
