import { useEffect, useState } from "react";
import { moviesArray } from "./ApiCalls/Data";
import { DisplayCards } from "./Components/DisplayCards";
import { Header } from "./Components/Header";
import { SelectRandomCardButton } from "./Components/SelectRandomCardButton";
import './output.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(moviesArray);
  },[]);

  // A random card means that can be repeated
  const handleRandomCardButton = () => {
    const randomIndex = Math.floor(Math.random() * (data.length) + 1);
    const newArray = data.map((movie, index) => {
      return {
        ...movie,
        selected: (index + 1) === randomIndex, // true or false
      }
    });
    setData(newArray);
  }

  return (
    <div className="App">
      <Header title = '¡Movies!'/>
      <DisplayCards data = { data }/>
      <SelectRandomCardButton handleRandomCardButton = { handleRandomCardButton }/>
    </div>
  );
}

export default App;
