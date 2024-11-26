import logo from './logo.svg';
import './App.scss';
//import Component vào
import MyComponent from './Example/MyComponent';
import FormComponent from './Example/FormComponent';

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
        
       
        {/* Khai báo component dạng 1 */}
        {/* <MyComponent/> */}
       
        {/* Khai báo component dạng 2 */}
        <MyComponent> </MyComponent>
       
       {/* From trong react */}
       <FormComponent/>

       
      </header>
    </div>
  );
}

export default App;
