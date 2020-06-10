import React from 'react';
import './theme/App.css';

import MapContainer from "./components/gis/MapContainer";
import ControlPanel from "./components/ControlPanel/ControlPanel";


function App() {
    const [graph, setGraphComponent] = React.useState(null);

    return (
        <div id="App" className="App" >
            <ControlPanel setGraphComponentHook = {setGraphComponent}/>
            <MapContainer/>
            {graph}
        </div>
    );
}

export default App;
