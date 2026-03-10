import './App.css'
import { Person } from './Person';

/*defining props
let name: string = "Paula";
let age: number = 200;
let isMarried: boolean = false;

let ages: number[] = [1,2,3,4,5];
let person: any = 3;
person = "whatever";
*/

function App() {
  return (
    <>
      <Person name={"tony"} age={35} isMarried={true} />
      <Person name={"maria"} age={22} isMarried={false} />
    </>
  );
}

export default App
