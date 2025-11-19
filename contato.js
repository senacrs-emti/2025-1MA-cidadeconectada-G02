document.getElementById("button").addEventListener("click", () => {
    
    const nome = document.getElementById("text");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("message");

    const vNome = nome.value.trim();
    const vEmail = email.value.trim();
    const vMensagem = mensagem.value.trim();

    if (vNome === "" || vEmail === "" || vMensagem === "") {
        alert("Não há mensagem");
    } else {
        alert("Enviado");

        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }
});