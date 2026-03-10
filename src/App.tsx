import './App.css'
import { Person } from './Person';


function App() {
  return (
    <>
      <Person name={"tony"} age={35} isMarried={true} />
      <Person name={"maria"} age={22} isMarried={false} />
    </>
  );
}

export default App
