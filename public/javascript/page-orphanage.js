const map = L.map('mapid').setView([-27.2172056,-49.6466067], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minHeigth: 240,
    minWidth: 240
}).setContent('Lar das Meninas <a href="info.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')

L.marker([-27.2172056,-49.6466067], { icon }).addTo(map)
    .bindPopup(popup)
    