document.getElementById("map").style.display = "none";
function initMap(lat, lng) {
    // The location of Uluru
    const mark = { lat: lat, lng: lng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: mark,

    });
    const marker = new google.maps.Marker({
        position: mark,
        map: map,
    });
}

function initPoint(lat, lng) {
    const mark = { lat: lat, lng: lng };
    const marker = new google.maps.Marker({
        position: mark,
        map: map,
    });
}