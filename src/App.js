import { useSelector } from 'react-redux';
import './App.css';



import Header from './components/Header'
import Products from "./components/Products";
import Total from './components/Total';
import Money from './components/Money';



function App() {

  const items = useSelector(state => state.money.items)
  console.log(items);

  return (
    <div className="App">
      <h1><Header /></h1>
      <Money />
      <Products />
      <Total />
    </div>
  );
}

export default App;
