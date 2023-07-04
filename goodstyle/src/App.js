import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting={"La mejor indumentaria masculina la encontrás acá."}/>
    </div>
  );
}

export default App;
