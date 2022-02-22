import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import Left from './components/Left';
import Right from './components/Right';
import Button from './components/Button';

function App() {
  return (<>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <div className='container'>
          <Top/>
          <Left/>
          <Right/>
          <Button/>
        </div>
        

      </header>
    </div>


  </>
  );
}

export default App;
