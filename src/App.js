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
    <StarRating maxlength={5} 
    onRating={onRating} rate = {rating} 
    color="yellow"
    />
  );
}

export default App;
