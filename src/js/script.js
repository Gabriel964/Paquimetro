const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("btnAbrir");
const btnFechar = document.getElementById("btnFechar");

const valorInput = document.getElementById("valorInput");
const invalido = document.getElementById("invalido");

// Evento abrir modal
btnAbrir.addEventListener("click", () => {
    const tempo = Number(valorInput.value);

    if (Number.isNaN(tempo) || tempo < 1) {
        // mostra a mensagem de inválido
        invalido.style.display = "block";
        return; // não abre o modal
    }

    // esconde a mensagem se estiver visível
    invalido.style.display = "none";

    // abre o modal
    modal.style.display = "block";
});

// Evento fechar modal
btnFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha ao clicar no fundo do modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

