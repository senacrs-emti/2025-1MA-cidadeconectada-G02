document.getElementById("botao").addEventListener("click", () => {
    
    const nome = document.getElementById("text");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("message");

    const vNome = nome.value.trim();
    const vEmail = email.value.trim();
    const vMensagem = mensagem.value.trim();

    if (vNome === "" || vEmail === "" || vMensagem === "") {
        alert("Incompleto");
    } else {
        alert("Enviado!");

        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }
});


document.getElementById("botaoinicio").addEventListener("click", () => {
    window.location.href = "index.html"; 
});

document.getElementById("botaomapa").addEventListener("click", () => {
    window.location.href = "mapa.html"; 
});

document.getElementById("botaocontatos").addEventListener("click", () => {
    window.location.href = "contatos.html"; 
});