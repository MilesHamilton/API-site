
//washington
var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('#mapwash'), {
    center: {lat: 38.9072, lng: 77.0369},
    zoom: 11
  });
}

// function initMap() {
//     map = new google.maps.Map(document.querySelector('#mapny'), {
//       center: {lat: 38.9072, lng: 77.0369},
//       zoom: 11
//     });
//   }

//   function initMap() {
//     map = new google.maps.Map(document.querySelector('#mapmx'), {
//       center: {lat: 38.9072, lng: 77.0369},
//       zoom: 11
//     });
//   }

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
})
});

