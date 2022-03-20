import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
function App() {

  // returning jsx code that is a combination of js and html
  return (
    <div className="App">
     <Device name="Oppo find x pro" price="$129.99"/>
     <Device name="Iphone 13 pro max" price="$1299" />
     <Watch></Watch>
    </div>
  );
}
 
export default App;
