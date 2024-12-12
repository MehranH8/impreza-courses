import Main from "./Main/Main";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div style={{direction:"rtl"}} className="App">
      <Router>
      <Main />
      </Router>
    </div>
  );
}

export default App;
