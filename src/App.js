import React from 'react';
import './theme/App.css';

import MapContainer from "./components/gis/MapContainer";
import ControlPanel from "./components/ControlPanel/ControlPanel";


function App() {


    return (
        <div id="App" className="App" >
            <ControlPanel/>
            <MapContainer/>
        </div>
    );
}

export default App;
