import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
import { Personlist } from './components/personList';
import { Status } from './components/status';
import { Heading } from './components/heading';
import { Oscar } from './components/oscar';
import { Button } from './components/Button';
import { Input } from './components/input';
import { Container } from './components/container';
import { User } from './components/State/User';
function App() {
  const personName = {
    first: 'Bruce',
    last: 'wayne',
  }
  const nameList=[{
    first: 'Bruce',
    last: 'Wayne'
  },{
    first:'Clark',
    last:'Kent'
  },
  {
    first:'Princess',
    last:'Diana'
  }]
  return (
    <div className="App">
      <Greet name='koustubh' messageCount={20} isLoggedIn={false}/>
      <Person name= {personName}/>
      <Personlist names={nameList}/>
      <Status status='loading'/>
      <Heading> Placeholder </Heading>
      <Oscar>
        <Heading>
          Oscar goes to dicaprio
        </Heading>
      </Oscar>
      <Greet name='vishwas' isLoggedIn={false}></Greet>
      <Button handleClick={(event,id)=>{console.log('button clicked',event,id)}}/>
      <Input value='' handleChange={(event)=> console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
      <User/>
    </div>
  );
}

export default App;
