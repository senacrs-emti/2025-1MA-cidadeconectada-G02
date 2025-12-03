document.getElementById("botaoinicio").addEventListener("click", () => {
    window.location.href = "index.html"; 
});
document.getElementById("botaomapa").addEventListener("click", () => {
    window.location.href = "mapa.html"; 
});
document.getElementById("botaocontatos").addEventListener("click", () => {
    window.location.href = "contato.html"; 
});

function sucesso(position){
	console.log(position.coords.latitude, position.coords.longitude);

	var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var usericon = L.icon({
        iconUrl: 'img/user-location.png',
        shadowUrl: 'img/user-location.png',

        iconSize:     [32,32],
        shadowSize:   [32, 32],
        iconAnchor:   [5, 30],
        shadowAnchor: [5, 30],
        popupAnchor:  [12, -20] 
    })
    
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

    var publicaicon = L.icon({
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

    const marker = [];

    marker[0] = L.marker([-30.035981, -51.170192], {icon: privicon}).addTo(map);
    marker[0].nome = "Unidade principal do Colégio Farroupilha";
    marker[0].gestao = "privada";
    marker[0].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[0].bindPopup("<b>" + marker[0].nome + "</b>" + "<br>" + "<spam>"+ marker[0].gestao +"</spam>" + "<br>" + "<spam>" + marker[0].ensino + "</spam>");

    marker[1] = L.marker([-30.027578031101925, -51.20868042732434], {icon: privicon}).addTo(map);
    marker[1].nome = "Colégio Nossa Senhora do Bom Conselho";
    marker[1].gestao = "privada";
    marker[1].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[1].bindPopup("<b>" + marker[1].nome + "</b>" + "<br>" + "<spam>"+ marker[1].gestao +"</spam>" + "<br>" + "<spam>" + marker[1].ensino + "</spam>");

    marker[2] = L.marker([-30.130351176291644, -51.239397390242296], {icon: privicon}).addTo(map);
    marker[2].nome = "Colégio Marista Ipanema";
    marker[2].gestao = "privada";
    marker[2].ensino = ["Infantil", "Fundamental","Médio"];
    marker[2].bindPopup("<b>" + marker[2].nome + "</b>" + "<br>" + "<spam>"+ marker[2].gestao +"</spam>" + "<br>" + "<spam>" + marker[2].ensino + "</spam>");

    marker[4] = L.marker([-30.07550433423898, -51.202950904704096], {icon: privicon}).addTo(map);
    marker[4].nome = "Colégio Marista Assunção";
    marker[4].gestao = "privada";
    marker[4].ensino = ["Infantil","Fundamental", "Médio"];
    marker[4].bindPopup("<b>" + marker[4].nome + "</b>" + "<br>" + "<spam>"+ marker[4].gestao +"</spam>" + "<br>" + "<spam>" + marker[4].ensino + "</spam>");

    marker[5] = L.marker([-30.060428089612113, -51.17289151635134], {icon: privicon}).addTo(map);
    marker[5].nome = "Colégio Marista Champagnat";
    marker[5].gestao = "privada";
    marker[5].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[5].bindPopup("<b>" + marker[5].nome + "</b>" + "<br>" + "<spam>"+ marker[5].gestao +"</spam>" + "<br>" + "<spam>" + marker[5].ensino + "</spam>");

    marker[6] = L.marker([-30.075852582161488, -51.21482929382603], {icon: privicon}).addTo(map);
    marker[6].nome = "Colégio João XXIII";
    marker[6].gestao = "privada";
    marker[6].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[6].bindPopup("<b>" + marker[6].nome + "</b>" + "<br>" + "<spam>"+ marker[6].gestao +"</spam>" + "<br>" + "<spam>" + marker[6].ensino + "</spam>");

    marker[7] = L.marker([-30.025025, -51.173691], {icon: privicon}).addTo(map);
    marker[7].nome = "Colégio Monteiro Lobato";
    marker[7].gestao = "privada";
    marker[7].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[7].bindPopup("<b>" + marker[7].nome + "</b>" + "<br>" + "<spam>"+ marker[7].gestao +"</spam>" + "<br>" + "<spam>" + marker[7].ensino + "</spam>");

    marker[8] = L.marker([-30.025027793094065, -51.19176693723678], {icon: privicon}).addTo(map);
    marker[8].nome = "Colégio Lumiar Porto Alegre";
    marker[8].gestao = "privada";
    marker[8].ensino = ["Fundamental", "Médio"];
    marker[8].bindPopup("<b>" + marker[8].nome + "</b>" + "<br>" + "<spam>"+ marker[8].gestao +"</spam>" + "<br>" + "<spam>" + marker[8].ensino + "</spam>");

    marker[9] = L.marker([-30.030212, -51.176788], {icon: privicon}).addTo(map);
    marker[9].nome = "Colégio Anchieta";
    marker[9].gestao = "privada";
    marker[9].ensino = ["Educação Infantil", "Ensino Fundamental", "Médio"];
    marker[9].bindPopup("<b>" + marker[9].nome + "</b>" + "<br>" + "<spam>"+ marker[9].gestao +"</spam>" + "<br>" + "<spam>" + marker[9].ensino + "</spam>");

    marker[10] = L.marker([-30.03982804531042, -51.19923470541426], {icon: privicon}).addTo(map);
    marker[10].nome = "Colégio Israelita Brasileiro";
    marker[10].gestao = "privada";
    marker[10].ensino = ["Infantil", "Fundamental","Médio"];
    marker[10].bindPopup("<b>" + marker[10].nome + "</b>" + "<br>" + "<spam>"+ marker[10].gestao +"</spam>" + "<br>" + "<spam>" + marker[10].ensino + "</spam>");

    marker[11] = L.marker([-30.033715891513584, -51.19714750470616], {icon: privicon}).addTo(map);
    marker[11].nome = "Colégio Leonardo da Vinci - Alfa";
    marker[11].gestao = "privada";
    marker[11].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[11].bindPopup("<b>" + marker[11].nome + "</b>" + "<br>" + "<spam>"+ marker[11].gestao +"</spam>" + "<br>" + "<spam>" + marker[11].ensino + "</spam>");

    marker[12] = L.marker([-30.095101393775074, -51.24571114014527], {icon: privicon}).addTo(map);
    marker[12].nome = "Colégio Leonardo da Vinci - Beta";
    marker[12].gestao = "privada";
    marker[12].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[12].bindPopup("<b>" + marker[12].nome + "</b>" + "<br>" + "<spam>"+ marker[12].gestao +"</spam>" + "<br>" + "<spam>" + marker[12].ensino + "</spam>");

    marker[13] = L.marker([-30.016990906911044, -51.19241238751823], {icon: privicon}).addTo(map);
    marker[13].nome = "Colégio João Paulo - Higienópolis";
    marker[13].gestao = "privada";
    marker[13].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[13].bindPopup("<b>" + marker[13].nome + "</b>" + "<br>" + "<spam>"+ marker[13].gestao +"</spam>" + "<br>" + "<spam>" + marker[13].ensino + "</spam>");

    marker[14] = L.marker([-30.02429043748329, -51.145832405268635], {icon: privicon}).addTo(map);
    marker[14].nome = "Colégio Don Luis Guanella";
    marker[14].gestao = "privada";
    marker[14].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[14].bindPopup("<b>" + marker[14].nome + "</b>" + "<br>" + "<spam>"+ marker[14].gestao +"</spam>" + "<br>" + "<spam>" + marker[14].ensino + "</spam>");

    marker[15] = L.marker([-30.078146930608455, -51.20842739488664], {icon: privicon}).addTo(map);
    marker[15].nome = "Colégio Universitário";
    marker[15].gestao = "privada";
    marker[15].ensino = ["Infantil","Fundamental","Médio"];
    marker[15].bindPopup("<b>" + marker[15].nome + "</b>" + "<br>" + "<spam>"+ marker[15].gestao +"</spam>" + "<br>" + "<spam>" + marker[15].ensino + "</spam>");

    marker[16] = L.marker([-30.034158845525585, -51.202648956834565], {icon: privicon}).addTo(map);
    marker[16].nome = "Colégio Metodista Americano";
    marker[16].gestao = "privada";
    marker[16].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[16].bindPopup("<b>" + marker[16].nome + "</b>" + "<br>" + "<spam>"+ marker[16].gestao +"</spam>" + "<br>" + "<spam>" + marker[16].ensino + "</spam>");

    marker[17] = L.marker([-30.05531829484836, -51.20198192799818], {icon: privicon}).addTo(map);
    marker[17].nome = "Colégio La Salle Santo Antônio";
    marker[17].gestao = "privada";
    marker[17].ensino = ["Infantil","Fundamental", "Médio"];
    marker[17].bindPopup("<b>" + marker[17].nome + "</b>" + "<br>" + "<spam>"+ marker[17].gestao +"</spam>" + "<br>" + "<spam>" + marker[17].ensino + "</spam>");

    marker[18] = L.marker([-30.065077586639216, -51.16862741349395], {icon: privicon}).addTo(map);
    marker[18].nome = "Colégio Murialdo";
    marker[18].gestao = "privada";
    marker[18].ensino = ["Infantil","Fundamental","Médio"];
    marker[18].bindPopup("<b>" + marker[18].nome + "</b>" + "<br>" + "<spam>"+ marker[18].gestao +"</spam>" + "<br>" + "<spam>" + marker[18].ensino + "</spam>");

    marker[19] = L.marker([-30.09755044052236, -51.230043291208986], {icon: privicon}).addTo(map);
    marker[19].nome = "Colégio Santa Teresa de Jesus";
    marker[19].gestao = "privada";
    marker[19].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[19].bindPopup("<b>" + marker[19].nome + "</b>" + "<br>" + "<spam>"+ marker[19].gestao +"</spam>" + "<br>" + "<spam>" + marker[19].ensino + "</spam>");

    marker[20] = L.marker([-30.02462385970332, -51.17261233225655], {icon: privicon}).addTo(map);
    marker[20].nome = "Colégio Província de São Pedro";
    marker[20].gestao = "privada";
    marker[20].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[20].bindPopup("<b>" + marker[20].nome + "</b>" + "<br>" + "<spam>"+ marker[20].gestao +"</spam>" + "<br>" + "<spam>" + marker[20].ensino + "</spam>");

    marker[21] = L.marker([-30.012705770013678, -51.18705195683572], {icon: privicon}).addTo(map);
    marker[21].nome = "Colégio Pastor Dohms - Unidade Higienópolis";
    marker[21].gestao = "privada";
    marker[21].ensino = ["Infantil","Fundamental", "Médio"];
    marker[21].bindPopup("<b>" + marker[21].nome + "</b>" + "<br>" + "<spam>"+ marker[21].gestao +"</spam>" + "<br>" + "<spam>" + marker[21].ensino + "</spam>");

    marker[22] = L.marker([-30.062395933081596, -51.228201693068655], {icon: publicaicon}).addTo(map);
    marker[22].nome = "Escola Estadual de Ensino Integral Euclides Da Cunha";
    marker[22].gestao = "pública";
    marker[22].ensino = ["Fundamental", "Médio"]; 
    marker[22].bindPopup("<b>" + marker[22].nome + "</b>" + "<br>" + "<spam>"+ marker[22].gestao +"</spam>" + "<br>" + "<spam>" + marker[22].ensino + "</spam>");

    marker[23] = L.marker([-30.03867479676886, -51.21349583070713], {icon: publicaicon}).addTo(map);
    marker[23].nome = "Colégio Militar de Porto Alegre";
    marker[23].gestao = "pública";
    marker[23].ensino = ["Fundamental", "Médio"]; 
    marker[23].bindPopup("<b>" + marker[23].nome + "</b>" + "<br>" + "<spam>"+ marker[23].gestao +"</spam>" + "<br>" + "<spam>" + marker[23].ensino + "</spam>");

    marker[24] = L.marker([-30.069910023976536, -51.18620233078537], {icon: privicon}).addTo(map);
    marker[24].nome = "Colégio Tiradentes da Brigada Militar de Porto Alegre";
    marker[24].gestao = "privada";
    marker[24].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[24].bindPopup("<b>" + marker[24].nome + "</b>" + "<br>" + "<spam>"+ marker[24].gestao +"</spam>" + "<br>" + "<spam>" + marker[24].ensino + "</spam>");

    marker[25] = L.marker([-30.037527181958993, -51.23106470061848], {icon: tecicon}).addTo(map);
    marker[25].nome = "Escola Técnica Estadual Parobé";
    marker[25].gestao = "pública";
    marker[25].ensino = ["Médio", "Técnico"];
marker[25].bindPopup("<b>" + marker[25].nome + "</b>" + "<br>" + "<spam>"+ marker[25].gestao +"</spam>" + "<br>" + "<spam>" + marker[25].ensino + "</spam>");

    marker[26] = L.marker([-30.045531960545542, -51.21219717969967], {icon: publicaicon}).addTo(map);
    marker[26].nome = "Escola Estadual de Ensino Fundamental Ildefonso Gomes";
    marker[26].gestao = "pública";
    marker[26].ensino = ["Fundamental"];
    marker[26].bindPopup("<b>" + marker[26].nome + "</b>" + "<br>" + "<spam>"+ marker[26].gestao +"</spam>" + "<br>" + "<spam>" + marker[26].ensino + "</spam>");

    marker[27] = L.marker([-30.014616513871033, -51.20126673678703], {icon: publicaicon}).addTo(map);
    marker[27].nome = "Escola Estadual de Ensino Fundamental Olegário Mariano";
    marker[27].gestao = "pública";
    marker[27].ensino = ["Fundamental"];
    marker[27].bindPopup("<b>" + marker[27].nome + "</b>" + "<br>" + "<spam>"+ marker[27].gestao +"</spam>" + "<br>" + "<spam>" + marker[27].ensino + "</spam>");

    marker[30] = L.marker([-30.02732350017701, -51.21842259982513], {icon: privicon}).addTo(map);
    marker[30].nome = "Colégio Marista Rosário";
    marker[30].gestao = "privada";
    marker[30].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[30].bindPopup("<b>" + marker[30].nome + "</b>" + "<br>" + "<spam>"+ marker[30].gestao +"</spam>" + "<br>" + "<spam>" + marker[30].ensino + "</spam>");

    marker[31] = L.marker([-30.041589110753772, -51.19736625652408], {icon: privicon}).addTo(map);
    marker[31].nome = "Colégio Vicentino Santa Cecília";
    marker[31].gestao = "privada";
    marker[31].ensino = ["Infantil", "Fundamental", "Médio"];
    marker[31].bindPopup("<b>" + marker[31].nome + "</b>" + "<br>" + "<spam>"+ marker[31].gestao +"</spam>" + "<br>" + "<spam>" + marker[31].ensino + "</spam>");

    marker[32] = L.marker([-30.063133001197258, -51.175486999148916], {icon: privicon}).addTo(map);
    marker[32].nome = "Colégio Nossa Senhora do Brasil";
    marker[32].gestao = "privada";
    marker[32].ensino = ["Infantil","Fundamental", "Médio"];
    marker[32].bindPopup("<b>" + marker[32].nome + "</b>" + "<br>" + "<spam>"+ marker[32].gestao +"</spam>" + "<br>" + "<spam>" + marker[32].ensino + "</spam>");

    marker[33] = L.marker([-30.033219233660315, -51.21733675934237], {icon: publicaicon}).addTo(map);
    marker[33].nome = "Instituto de Educação General Flores da Cunha";
    marker[33].gestao = "pública";
    marker[33].ensino = ["Fundamental", "Médio"];
    marker[33].bindPopup("<b>" + marker[33].nome + "</b>" + "<br>" + "<spam>"+ marker[33].gestao +"</spam>" + "<br>" + "<spam>" + marker[33].ensino + "</spam>");

    marker[34] = L.marker([-30.026317061493387, -51.21209834262374], {icon: tecicon}).addTo(map);
    marker[34].nome = "Escola de Ensino Médio Senac Distrito Criativo";
    marker[34].gestao = "privada";
    marker[34].ensino = ["Médio", "Técnico"];
    marker[34].bindPopup("<b>" + marker[34].nome + "</b>" + "<br>" + "<spam>"+ marker[34].gestao +"</spam>" + "<br>" + "<spam>" + marker[34].ensino + "</spam");

    marker[35] = L.marker([-30.029035515188745, -51.22442786802855], {icon: ejaicon}).addTo(map);
    marker[35].nome = "Colégio AGIR";
    marker[35].gestao = "privada";
    marker[35].ensino = ["EJA", "Fundamental", "Médio"];
    marker[35].bindPopup("<b>" + marker[35].nome + "</b>" + "<br>" + "<spam>"+ marker[35].gestao +"</spam>" + "<br>" + "<spam>" + marker[35].ensino + "</spam>");

    marker[36] = L.marker([-30.042076675001315, -51.2266778], {icon: privicon}).addTo(map);
    marker[36].nome = "Escola de Educação Básica Mãe Admirável";
    marker[36].gestao = "privada";
    marker[36].ensino = ["Infantil", "Fundamental"];
    marker[36].bindPopup("<b>" + marker[36].nome + "</b>" + "<br>" + "<spam>"+ marker[36].gestao +"</spam>" + "<br>" + "<spam>" + marker[36].ensino + "</spam>");

    marker[37] = L.marker([position.coords.latitude, position.coords.longitude], {icon: usericon}).addTo(map);
    marker[37].bindPopup("<b>Sua localização</b>").openPopup();

    document.getElementById('searchbar').addEventListener("keyup", function(e){
        if (e.key === "Enter") {

            const texto = this.value.toLowerCase();
            if(!texto) return;

            let encontrado = false;

            for (let i = 0; i < (marker.length || 0); i++) {
                if (!marker[i]) continue;
                if (marker[i].nome && marker[i].nome.toLowerCase().includes(texto)) {
                    map.setView(marker[i].getLatLng(), 17);
                    marker[i].openPopup();
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                alert("Escola não encontrada!");
            }
        }
    });

    const checkPublica = document.getElementById('buttonpubli')
    const checkPrivada = document.getElementById('buttonpriv')

    checkPublica.addEventListener("change", AutualizarFiltro);
    checkPrivada.addEventListener("change", AutualizarFiltro);

    function AutualizarFiltro() {
        if (this === checkPublica&&checkPublica.checked) {
            checkPrivada.checked = false;
        }
        if (this === checkPrivada&&checkPrivada.checked) {
            checkPublica.checked = false;
        }

        let tipo = null;

        if (checkPublica.checked) tipo = "pública";
        if (checkPrivada.checked) tipo = "privada";

        filtrarPorGestao(tipo);
    }

    function filtrarPorGestao(tipo) {

        for (let i = 0; i < marker.length; i++) {
            if (!marker[i]) continue;

            if (tipo === null) {
                map.addLayer(marker[i]);
                continue;
            }

            if (marker[i].gestao === tipo) {
                map.addLayer(marker[i]);
            } else {
                map.removeLayer(marker[i]);
            }
        }
    }

    const selectEnsino = document.getElementById('nivelensino');

    selectEnsino.addEventListener("change", () => {
        filtrarPorNivel(selectEnsino.value);
    });

    function filtrarPorNivel(nivel) {

        if (nivel === "") {
            for (let i = 0; i < marker.length; i++) {
                if (marker[i]) map.addLayer(marker[i]);
            }
            return;
        }

        for (i = 0; i < marker.length; i++) {

            if (!marker[i]) continue;

            if (marker[i].ensino.includes(nivel)) {
                map.addLayer(marker[i]);
            } else {
                map.removeLayer(marker[i]);
            }
        }
    }
}

navigator.geolocation.getCurrentPosition(sucesso);