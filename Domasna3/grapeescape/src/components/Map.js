import React, { useState } from 'react';
import '../stylesheet/Map.css'
import '../components/MapComponents/MainMap'
import MainMap from "./MapComponents/MainMap";
import Winery from "./MapComponents/Winery";
import Vineyard from "./MapComponents/Vineyard";
import WineCellar from "./MapComponents/WineCellar";
import WineTours from "./MapComponents/WineTours";
function MapComponent() {
    const [selectedFrame, setSelectedFrame] = useState('iframe1');

    const handleButtonClick = (frameName) => {
        setSelectedFrame(frameName);
    };

    return (
        <div id="mapContainer">
            <div id="winery-info" ></div>
            <button className="mapButton" onClick={() => handleButtonClick('iframe1')}>Show all</button>
            <button className="mapButton" onClick={() => handleButtonClick('iframe2')}>Winery</button>
            <button className="mapButton" onClick={() => handleButtonClick('iframe3')}>Vineyard</button>
            <button className="mapButton" onClick={() => handleButtonClick('iframe4')}>Wine Cellar</button>
            <button className="mapButton" onClick={() => handleButtonClick('iframe5')}>Wine Tours & Tasting</button>
            {selectedFrame === 'iframe1' && (
                <MainMap/>
            )}
            {selectedFrame === 'iframe2' && (
               <Winery/>
            )}
            {selectedFrame === 'iframe3' && (
                <Vineyard/>
            )}
            {selectedFrame === 'iframe4' && (
                <WineCellar/>
            )}
            {selectedFrame === 'iframe5' && (
                <WineTours/>
            )}



        </div>
    );
}

export default MapComponent;
