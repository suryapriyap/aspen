import logo from './logo.svg';
import './App.css';
import Background from './Components/Background';
import Title from './Components/Title';
import Facilty from './Components/Facilty';


function App() {
  return (
    <div className="App">
      <div className="App-main">
      <Background/>
      <Title/>
      <Facilty/>
    </div>
    </div>
  );
}

export default App;
