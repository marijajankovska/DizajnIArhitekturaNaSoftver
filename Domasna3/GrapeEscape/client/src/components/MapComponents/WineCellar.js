import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../stylesheet/Map.css'
import {Popup} from 'react-map-gl';
import {useNavigate} from "react-router-dom";
const MapComponent = () => {
    const navigate = useNavigate()
    function redirectAddReview (){
        navigate('/starreview')
    }
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamFua292c2thbWFyaWphIiwiYSI6ImNscGxidHpnazAzMG4ycW13d2hjbzBuOGsifQ.itG2FkJVPNmjNBdA9ODleg';
        const map = new mapboxgl.Map({
            container: 'map',
            // Replace 'YOUR_STYLE_URL' with your actual stylesheet URL.
            style: 'mapbox://styles/jankovskamarija/clpn80m8j010c01po50zvdrm6',
            center: [21.7453, 41.6086],
            zoom: 8
        });

        map.on('click', (event) => {
            // If the user clicked on one of your markers, get its information.
            const features = map.queryRenderedFeatures(event.point, {
                layers: ['winecellar'] // replace with your layer name
            });
            if (!features.length) {
                return;
            }
            const feature = features[0];
            const randomNumber = Math.floor(Math.random() * 4) + 2;

            const popup = new mapboxgl.Popup({ offset: [0, 0] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                    `<h3>${feature.properties.title}</h3>
                    <p>${feature.properties.description}</p>
                    <p>${feature.properties.city}</p>
                    <p class="starability-result" data-rating="${randomNumber}"></p>
                    <button id="AddReview">Add Rating</button>
`
                )
                .addTo(map);
            const button = document.getElementById("AddReview");
            button.addEventListener("click", redirectAddReview);
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div>
            <link
                href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
                rel="stylesheet"
            />
            <div className="Winery info"></div>
            <div id='map' ></div>
        </div>
    );
};
export default MapComponent;