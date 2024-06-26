import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtocolDetails from './components/ProtocolDetails';
import ProtocolList from './components/ProtocolList';
import { protocols } from './data/protocols.js';
import './App.scss';

function App() {
    const [step, setStep] = useState(0);

    return (
        <Router basename="/furlaxation">
            <div className="App">
                <Routes>
                    <Route path={"/protocol/:protocolId"} element={
                        <ProtocolDetails protocols={protocols} step={step}/>
                    }/>
                    <Route path={"/"} element={
                        <ProtocolList protocols={protocols}/>
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;