document.getElementById("btnWhatsapp").addEventListener("click", () => {

    // Numero ofuscado
    const segredo = "NTUxNDk5MTIxNjE5NA==";

    //Decodificando o numero
    const telefone = atob(segredo);

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});
