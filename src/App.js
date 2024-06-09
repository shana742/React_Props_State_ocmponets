import './App.css';

import FunctionalComponent from './Componets/FunctionalComponent'
import ClassComponet from './Componets/ClassComponet'
import StatetoFunctional from './Componets/StatetoFunctional';
import StatetoClass from './Componets/StatetoClass';
import LifecycleMethod from './Componets/LifecycleMethod';
import StatePropCombined from './Componets/StatePropCombined';
import UserProfile from './Componets/Props/UserProfile';


function App() {
  return(
    <>
      <FunctionalComponent />
      < ClassComponet/><br></br><br></br>
     <UserProfile /> <br></br><br></br>
      <StatetoFunctional/><br></br><br></br>
      <StatetoClass/><br></br>
      <LifecycleMethod/><br></br>
      <StatePropCombined/>
    </>
  )
}

export default App;