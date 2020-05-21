import React,{useState,useEffect} from 'react';
import './theme/App.css';

import MapContainer from "./components/gis/MapContainer";
import ControlPanel from "./components/ControlPanel/ControlPanel";


function App() {
    const [style,setStyle] = useState({width: window.innerwidth+'px',height: window.innerHeight+'px'})
    useEffect(() => {
            setStyle({
                width: window.innerWidth+'px',
                height: window.innerHeight+'px'
            })
    })
    return (
        <div className="App" style={style}>
            <ControlPanel/>
            <MapContainer/>
        </div>
    );
}

export default App;
