import './App.css'
import { User } from './Person';
import { UserProvider } from './UserContextProvider';


function App() {
  return (
    <UserProvider>
      <User name={"tony"} age={35} isMarried={true} />
      <User name={"maria"} age={22} isMarried={false} />
    </UserProvider>
  );
}

export default App
