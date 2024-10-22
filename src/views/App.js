import logo from './logo.svg';
import './App.scss';
//import Component vào
import MyComponent from './Example/MyComponent';

/**
 *  có 2 loại componet: class component / funtion component
 * Funtion ( funtion / arrow funtion)
 * funtion: funtion _FuntionName_():...
 * arrow funtion : const/let _VaLue_ = () =>
 * 
 */

function App() {
  // JSX -> return 1 cục html -> component
  // Biến = thẻ html được luôn 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          heeloo React
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        dạng 1
        {/* Khai báo component dạng 1 */}
        <MyComponent/>
        dạng 2
        {/* Khai báo component dạng 2 */}
        {/* <MyComponent> </MyComponent> */}
       
      </header>
    </div>
  );
}

export default App;
