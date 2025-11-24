function sucesso(position){
	console.log(position.coords.latitude, position.coords.longitude);

	var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-30.026317061493387, -51.21209834262374]).addTo(map);

var marker2 = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);


marker.bindPopup("<b>Escola de Ensino Médio Senac Distrito Criativo</b> <br> <spam>Particular</spam>").openPopup();

marker2.bindPopup("<b>Sua localização</b>").openPopup();

}

navigator.geolocation.getCurrentPosition(sucesso);
