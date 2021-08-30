import React  from "react"
import './App.css';
import Profiles from './Profile/Profiles'
import image from "./images.jpg"

const alertMyInput = name => alert(name);

const App = () => {
let FullName= 'Thabet Hamdi'
let Profession= 'Ingénieur Electrique'

return (
    <div className="projet" >
      <Profiles 
      Image={image}
      FullName={FullName}  
      Profession = {Profession}
      alertMyInput={alertMyInput}/> 
    </div>
  );
}

export default App;
