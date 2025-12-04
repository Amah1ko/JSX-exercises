import React from "react";
import { A1, A2, A3, A7, TopicList, Greeting, Info, AppNoJSX } from "./jsxExercises";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            {A1}
            {A2}
            {A3}
            <Greeting name="Feruza" />
            <TopicList />
            <AppNoJSX />
            {A7}
            <Info />
        </div>
    );
}

export default App;





// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
