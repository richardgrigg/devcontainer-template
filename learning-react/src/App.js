import './App.css';
import { useState } from 'react';

function MyButton({ count, onClick }) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>

  );
}


function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function App() {

  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);

  }

  return (
    <>

      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={onClick} />
      <MyButton count={count} onClick={onClick} />
      <MyButton count={count} onClick={onClick} />

<br>

</br>
      <ShoppingList />

      <Toolbar />

    </>



  );
}

export default App;
