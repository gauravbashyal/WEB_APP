import "./App.css";

import LightBulb from "./LightBulb";
import PasswordToggler from "./passwordToggler";
import Counter from "./Counter";
import Parent from "./Parent";

function App() {
  return (
    <div className="container">

      <div className="section">
        <LightBulb />
      </div>

      <div className="section">
        <PasswordToggler />
      </div>

      <div className="section">
        <Counter />
      </div>

      <div className="section">
        <Parent />
      </div>
    </div>
  );
}

export default App;


// import RouterApp from "./RouterApp";

// function App() {
//   return <RouterApp />;
// }

// export default App;