import './App.css'
import { User, Countries } from './Person';
import { UserProvider } from './UserContextProvider';


function App() {
  return (
    <UserProvider>
      <User name={"tony"} age={35} isMarried={true} country={Countries.Brazil} />
      <User name={"maria"} age={22} isMarried={false} country={Countries.Italy} />
    </UserProvider>
  );
}

export default App
