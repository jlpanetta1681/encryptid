import './App.css';
import nessie from "./images/nessie.jpg";
import ohiofrogmen from "./images/ohiofrogmen.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>ENCRYPTID</h1>
      </header>
      
      <div class="center-images">
        <div class="loch-Ness-Monster">
            <img src={nessie} alt="nessie" />
        </div>
      <div class="ohio-Frogmen">
        <img src={ohiofrogmen} alt="ohio-frogmen" />

      </div> 
     </div>
    </div>
  );
}
          

export default App;
