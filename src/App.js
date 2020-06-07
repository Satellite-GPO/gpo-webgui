import React from 'react';
import './theme/App.css';

import MapContainer from "./components/gis/MapContainer";
import ControlPanel from "./components/ControlPanel/ControlPanel";


function App() {
    const style = {
        height: window.innerHeight+'px'
    };

    return (
        <div id="App" className="App" style={style}>
            <ControlPanel/>
            <MapContainer/>
        </div>
    );
}

export default App;
