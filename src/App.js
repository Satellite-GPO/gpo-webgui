import React from 'react';
import './theme/App.css';

import MapContainer from "./components/gis/MapContainer";
import ControlPanel from "./components/ControlPanel/ControlPanel";


function App() {
    const style = {
        width: '100%',
        height: window.innerHeight+'px'
    };
    return (
        <div className="App" style={style}>
            <ControlPanel/>
            <MapContainer/>
        </div>
    );
}

export default App;
