
import Tracker from "./budget-tracker/Tracker";
import "./style.css"
import Formto from "./todo/Formto";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Formto />
        <Tracker />

      </div>
    </div>
  );
}

export default App;



