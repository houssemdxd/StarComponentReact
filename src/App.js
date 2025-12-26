import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import StarRating from './Star';

function App() {

  const [rating , setRating] = useState(0)

  function onRating(val)
  {
    setRating(val)
  }
  
  
  return (
    <StarRating maxlength={10} onRating={onRating} rate = {rating} color="yellow"></StarRating>
  );
}

export default App;
