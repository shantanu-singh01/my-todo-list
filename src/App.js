import './App.css';
import {useState} from 'react'; 
import List from './List';

function App() {

  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);


  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
    setCurrentItem("");
  }
 
  

 return (
  <div className='App'>
    <h1>My To-Do App</h1>
    <header className='App-header'> 
      <div className='Wrapper'>
        <div className='Input-wrapper'>
          <input value={currentItem} onChange={onChangeHandler} placeholder='Enter tasks to do' />
          <button onClick={addItemToList}>+</button>
        </div>
        <List itemList={itemList} updateItemList={updateItemList} />
      </div>
    </header>
  </div>
    
  
);  
}

export default App;
