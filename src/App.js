import './App.css';
import {useEffect, useState} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
        }, [])
``
    const onClouse = () => {
        tg.close()
    }

  return (
    <div className="App">
       work
        <button onClick={onClouse}>Закрыть</button>
    </div>
  );
}

export default App;
