// Haritayı başlat (Merkez: İstanbul, Zoom: 13)
const map = L.map('map').setView([41.0082, 28.9784], 13);

// OpenStreetMap katmanı ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap katkıda bulunanlar'
}).addTo(map);

let userMarker = null;
let routingControl = null;

// Kullanıcının konumunu bulma
document.getElementById('locate-btn').addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert("Tarayıcınız konum desteklemiyor.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        map.setView([lat, lng], 15);

        if (userMarker) {
            userMarker.setLatLng([lat, lng]);
        } else {
            userMarker = L.marker([lat, lng]).addTo(map)
                .bindPopup("Buradasınız").openPopup();
        }
    }, () => {
        alert("Konum alınamadı.");
    });
});

// Haritaya tıklayarak rota oluşturma (Başlangıç: Konum veya İstanbul, Bitiş: Tıklanan yer)
map.on('click', function(e) {
    const destLat = e.latlng.lat;
    const destLng = e.latlng.lng;

    navigator.geolocation.getCurrentPosition(position => {
        const startLat = position.coords.latitude;
        const startLng = position.coords.longitude;

        if (routingControl) {
            map.removeControl(routingControl);
        }

        // Rota çizdirme aracı
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(startLat, startLng),
                L.latLng(destLat, destLng)
            ],
            routeWhileDragging: true,
            language: 'tr'
        }).addTo(map);

    }, () => {
        alert("Rota çizebilmek için önce 'Konumumu Bul' butonuna basmalısınız.");
    });
});

