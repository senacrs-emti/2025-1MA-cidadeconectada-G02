document.getElementById("botaoinicio").addEventListener("click", () => {
    window.location.href = "index.html"; 
});
document.getElementById("botaomapa").addEventListener("click", () => {
    window.location.href = "mapa.html"; 
});
document.getElementById("botaocontatos").addEventListener("click", () => {
    window.location.href = "contatos.html"; 
});

function sucesso(position){
	console.log(position.coords.latitude, position.coords.longitude);

	var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var tecicon = L.icon({
        iconUrl: 'img/robo.png',
        shadowUrl: 'img/robo.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20]
    }); 

    var ejaicon = L.icon({
        iconUrl: 'img/eja.png',
        shadowUrl: 'img/eja.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20]
    });

    var puclicaicon = L.icon({
        iconUrl: 'img/escola-publi.png',
        shadowUrl: 'img/escola-publi.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20]
    });

    var privicon = L.icon({
        iconUrl: 'img/escola-priv.png',
        shadowUrl: 'img/escola-priv.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20]
    });

    infaticon = L.icon({
        iconUrl: 'img/daycare.png',
        shadowUrl: 'img/daycare.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20]
    });

    const marker = [];

    marker[0] = L.marker([-30.035981, -51.170192], {icon: privicon}).addTo(map);
    marker[0].bindPopup("<b>Unidade principal do Colégio Farroupilha</b>");

    marker[1] = L.marker([-30.027578031101925, -51.20868042732434], {icon: privicon}).addTo(map);
    marker[1].bindPopup("<b>Colégio Nossa Senhora do Bom Conselho</b>");

    marker[2] = L.marker([-30.130351176291644, -51.239397390242296], {icon: privicon}).addTo(map);
    marker[2].bindPopup("<b>Colégio Marista Ipanema</b>");

    marker[3] = L.marker([-30.029926034995302, -51.218062404932915], {icon: privicon}).addTo(map);
    marker[3].bindPopup("<b>Colégio Marista Rosário</b>");

    marker[4] = L.marker([-30.07550433423898, -51.202950904704096], {icon: privicon}).addTo(map);
    marker[4].bindPopup("<b>Colégio Marista Assunção</b>");

    marker[5] = L.marker([-30.060428089612113, -51.17289151635134], {icon: privicon}).addTo(map);
    marker[5].bindPopup("<b>Colégio Marista Champagnat</b>");

    marker[6] = L.marker([-30.075852582161488, -51.21482929382603], {icon: privicon}).addTo(map);
    marker[6].bindPopup("<b>Colégio João XXIII</b>");

    marker[7] = L.marker([-30.025025, -51.173691], {icon: privicon}).addTo(map);
    marker[7].bindPopup("<b>Colégio Monteiro Lobato</b>");

    marker[8] = L.marker([-30.025027793094065, -51.19176693723678], {icon: privicon}).addTo(map);
    marker[8].bindPopup("<b>Colégio Lumiar Porto Alegre</b>");

    marker[9] = L.marker([-30.030212, -51.176788], {icon: privicon}).addTo(map);
    marker[9].bindPopup("<b>Colégio Anchieta</b>");

    marker[10] = L.marker([-30.03982804531042, -51.19923470541426], {icon: privicon}).addTo(map);
    marker[10].bindPopup("<b>Colégio Israelita Brasileiro</b>");

    marker[11] = L.marker([-30.033715891513584, -51.19714750470616], {icon: privicon}).addTo(map);
    marker[11].bindPopup("<b>Colégio Leonardo da Vinci - Alfa</b>");

    marker[12] = L.marker([-30.095101393775074, -51.24571114014527], {icon: privicon}).addTo(map);
    marker[12].bindPopup("<b>Colégio Leonardo da Vinci - Beta</b>");

    marker[13] = L.marker([-30.016990906911044, -51.19241238751823], {icon: privicon}).addTo(map);
    marker[13].bindPopup("<b>Colégio João Paulo - Higienópolis</b>");

    marker[14] = L.marker([-30.02429043748329, -51.145832405268635], {icon: privicon}).addTo(map);
    marker[14].bindPopup("<b>Colégio Don Luis Guanella</b>");

    marker[15] = L.marker([-30.078146930608455, -51.20842739488664], {icon: privicon}).addTo(map);
    marker[15].bindPopup("<b>Colégio Universitário</b>");

    marker[16] = L.marker([-30.034158845525585, -51.202648956834565], {icon: privicon}).addTo(map);
    marker[16].bindPopup("<b>Colégio Metodista Americano</b>");

    marker[17] = L.marker([-30.05531829484836, -51.20198192799818], {icon: privicon}).addTo(map);
    marker[17].bindPopup("<b>Colégio La Salle Santo Antônio</b>");

    marker[18] = L.marker([-30.065077586639216, -51.16862741349395], {icon: privicon}).addTo(map);
    marker[18].bindPopup("<b>Colégio Murialdo</b>");

    marker[19] = L.marker([-30.09755044052236, -51.230043291208986], {icon: privicon}).addTo(map);
    marker[19].bindPopup("<b>Colégio Santa Teresa de Jesus</b>");

    marker[20] = L.marker([-30.02462385970332, -51.17261233225655], {icon: privicon}).addTo(map);
    marker[20].bindPopup("<b>Colégio Província de São Pedro</b>");

    marker[21] = L.marker([-30.012705770013678, -51.18705195683572], {icon: privicon}).addTo(map);
    marker[21].bindPopup("<b>Colégio Pastor Dohms - Unidade Higienópolis</b>");

    marker[22] = L.marker([-30.062395933081596, -51.228201693068655], {icon: puclicaicon}).addTo(map);
    marker[22].bindPopup("<b>Escola Estadual de Ensino Integral Euclides Da Cunha</b>");

    marker[23] = L.marker([-30.03867479676886, -51.21349583070713], {icon: puclicaicon}).addTo(map);
    marker[23].bindPopup("<b>Colégio Militar de Porto Alegre</b>");

    marker[24] = L.marker([-30.069910023976536, -51.18620233078537], {icon: privicon}).addTo(map);
    marker[24].bindPopup("<b>Colégio Tiradentes da Brigada Militar de Porto Alegre</b>");

    marker[25] = L.marker([-30.037527181958993, -51.23106470061848], {icon: puclicaicon}).addTo(map);
    marker[25].bindPopup("<b>Escola Técnica Estadual Parobé</b>");

    marker[26] = L.marker([-30.045531960545542, -51.21219717969967], {icon: puclicaicon}).addTo(map);
    marker[26].bindPopup("<b>Escola Estadual de Ensino Fundamental Ildefonso Gomes</b>");

    marker[27] = L.marker([-30.014616513871033, -51.20126673678703], {icon: puclicaicon}).addTo(map);
    marker[27].bindPopup("<b>Escola Estadual de Ensino Fundamental Olegário Mariano</b>");

    marker[28] = L.marker([-30.063133001197258, -51.175486999148916], {icon: privicon}).addTo(map);
    marker[28].bindPopup("<b>Colégio Nossa Senhora do Brasil</b>");

    marker[29] = L.marker([-30.027333850539932, -51.20865192000752], {icon: privicon}).addTo(map);
    marker[29].bindPopup("<b>Colégio Nossa Senhora do Bom Conselho</b>");

    marker[30] = L.marker([-30.02732350017701, -51.21842259982513], {icon: privicon}).addTo(map);
    marker[30].bindPopup("<b>Colégio Marista Rosário</b>");

    marker[31] = L.marker([-30.041589110753772, -51.19736625652408], {icon: privicon}).addTo(map);
    marker[31].bindPopup("<b>Colégio Vicentino Santa Cecília</b>");

    marker[32] = L.marker([-30.063133001197258, -51.175486999148916], {icon: privicon}).addTo(map);
    marker[32].bindPopup("<b>Colégio Nossa Senhora do Brasil</b>");

    marker[33] = L.marker([-30.033219233660315, -51.21733675934237], {icon: puclicaicon}).addTo(map);
    marker[33].bindPopup("<b>Instituto de Educação General Flores da Cunha</b>");


    marker[34] = L.marker([-30.026317061493387, -51.21209834262374], {icon: tecicon}).addTo(map);
    marker[34].bindPopup("<b>Escola de Ensino Médio Senac Distrito Criativo</b> <br> <spam>Particular</spam>").openPopup();

    marker[35] = L.marker([-30.029035515188745, -51.22442786802855], {icon: ejaicon}).addTo(map);
    marker[35].bindPopup("<b>Colégio AGIR</b>")

    marker[36] = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker[36].bindPopup("<b>Sua localização</b>").openPopup();


}

navigator.geolocation.getCurrentPosition(sucesso);


