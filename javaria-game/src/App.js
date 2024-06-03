
import './App.css';
import Header from './components/header/Header';
import SpeedTester from './components/speed/SpeedCheck';
function App() {
  return (
    <div className="App" style={{backgroundColor:"#A4ECCC", height:"100vh"}}>
      <Header/>
      <SpeedTester/>
    </div>
  );
}

export default App;
