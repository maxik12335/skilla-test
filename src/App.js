import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  useEffect(() => {
    fetch("https://api.skilla.ru/mango/getList", {
      method: "POST",
      headers: {
        "Authorization": "Bearer testtoken"
      }
    }).then(data => data.json()).then(json => console.log(json))
  })

  return (
    <div className="App">
      <Sidebar />
      <div className="app__right">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
