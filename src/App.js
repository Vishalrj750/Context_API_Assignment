import './App.css';
import { Body } from './Components/Body';
import { LoginStatus } from './Components/LoginStatus';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <LoginStatus />
    </div>
  );
}

export default App;
