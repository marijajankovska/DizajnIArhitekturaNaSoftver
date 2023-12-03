
mapboxgl.accessToken = 'pk.eyJ1IjoiamFua292c2thbWFyaWphIiwiYSI6ImNscGxidHpnazAzMG4ycW13d2hjbzBuOGsifQ.itG2FkJVPNmjNBdA9ODleg';
const map = new mapboxgl.Map({
    container: 'map',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/jankovskamarija/clpn80m8j010c01po50zvdrm6',
    center: [21.743258,41.6137143],
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
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    const wineryInfo = document.getElementById('winery-info');
    wineryInfo.classList.remove('hidden');
    wineryInfo.classList.add('whiteBackground');
    wineryInfo.innerHTML = `
    <div class="pad">
        <h2>${feature.properties.title}</h2>
        <h4>${feature.properties.description}</h4>
        <p>Additional info</p>
        <img id="img-cont" src="scripts/303953341_502135398541221_5982366714516587784_n.jpg">
    </div>
    `;
});
function addPoint() {
    document.getElementById('textInput').value = ''
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat([22.0816772838394, 41.4831027744164]) // Set the desired coordinates
        .setHTML(
            '<h3>Семејна винарија „Томов“</h3><p>Тимјаник 1440</p>'
        )
        .addTo(map);
    const wineryInfo = document.getElementById('winery-info');
    wineryInfo.innerHTML = `
        <h2>Семејна винарија „Томов“</h2>
        <h4>Тимјаник 1440</h4>
        <p>Additional info</p>
    `;
}

var addButton = document.getElementById('addPointButton');
addButton.addEventListener('click', addPoint);

