import './App.css';
import ProfilePhoto from "./Profile/ProfilePhoto"
import FullName from "./Profile/FullName"
import Adresse from "./Profile/Adresse"



function App() {
  return (
    <div className="App">
      <header className= 'App-header'>
      <ProfilePhoto/>
      <FullName/>
      <Adresse/>
      
      </header>
    </div>
  );
}

export default App;
