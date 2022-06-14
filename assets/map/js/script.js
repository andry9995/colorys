(function($) {
// var map = L.map('map').setView([47.08, 2.68], 5);
var map = L.map('map').setView([-18.875190119730934, 47.52384884906241], 17);

// var mymap = L.tileLayer('https://tile.jawg.io/8b8839af-d378-47c5-aa50-5854da3e7bd1/{z}/{x}/{y}{r}.png?access-token=axaCe8tpmQLITWU4ygLT8N2NZWpdNGZvqILtPPbM4E6Rmd7MmviL1Huu0T5XC7BB', {
var mymap = L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=axaCe8tpmQLITWU4ygLT8N2NZWpdNGZvqILtPPbM4E6Rmd7MmviL1Huu0T5XC7BB', {
  attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 0,
  maxZoom: 22,
  accessToken: 'axaCe8tpmQLITWU4ygLT8N2NZWpdNGZvqILtPPbM4E6Rmd7MmviL1Huu0T5XC7BB'
}).addTo(map);

var rovaIcon = L.icon({
  iconUrl: '../images/marker-icon.png',
  iconSize: [40,40]
});

var img = $('.img-store').html();
L.marker([-18.875190119730934, 47.52384884906241], { icon : rovaIcon }).addTo(map)
    .bindPopup( img )
    // .openPopup();

})(jQuery);
 