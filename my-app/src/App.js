import logo from './logo.svg';
import './App.css';
import Reducer from './Component/Reducer/Reducer';
import Patientmanager from './Component/Patientmanager/Patientmanager';

function App() {
  return (
    <div className="App">
      <Reducer></Reducer>
      <Patientmanager></Patientmanager>
      </div>
  );
}

export default App;
