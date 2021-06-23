// Initialize and add the map
function initMap(lat, lng) {
    // The location of Uluru
    const mark = { lat: lat, lng: lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: mark,
    });
    const marker = new google.maps.Marker({
        position: mark,
        map: map,
    });
}