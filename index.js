
//Washington
var map;
var map2;
var map3
function initMap() {
    // Washington
  map = new google.maps.Map(document.querySelector('#mapwash'), {
    center: {lat: 38.89511, lng: -77.03637},
    zoom: 12
  })
    // new york
  map = new google.maps.Map(document.querySelector('#mapny'), {
    center: {lat: 40.7128, lng: -74.0060},
    zoom: 12
  
})
    // mexico cito
map = new google.maps.Map(document.querySelector('#mapmx'), {
    center: {lat: 19.4326, lng: -99.1332},
    zoom: 12
})
}



// toggle menu bottons
let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
    let sibling = button.nextElementSibling
if(sibling.style.display === 'flex') {
    sibling.style.display = 'none'
} else {
    sibling.style.display = 'flex'
}
})});

