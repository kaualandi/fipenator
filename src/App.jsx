import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Selections from './Components/Selections';
import Finally from './Components/Finally';

function App() {
    const [page, setPage] = useState(0);
    const [type, setType] = useState(undefined);
    const [resData, setResData] = useState(undefined);

    return (
        <div className="App">
            <header className="App-header">
                <Header setPage={setPage} page={page}/>
            </header>
            <main className="d-flex">
                {page === 0 && <Home setPage={setPage} setType={setType}/>}
                {page === 1 && <Selections type={type} setPage={setPage} setFinally={setResData}/>}
                {page === 2 && <Finally resData={resData}/>}
            </main>
        </div>
    );
}

export default App;