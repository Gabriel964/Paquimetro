//  Display
const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("btnAbrir");
const btnFechar = document.getElementById("btnFechar");

//  Input
const valorInput = document.getElementById("valorInput");
const invalido = document.getElementById("invalido");

//  Resultados armazenados em um banco de dados como array
const tabela = [
    { horas: 1, preco: 5 },
    { horas: 2, preco: 10 },
    { horas: 3, preco: 15 }
];


// Evento abrir modal
btnAbrir.addEventListener("click", () => {
    const dinheiro = Number(valorInput.value);

    if (Number.isNaN(dinheiro) || dinheiro < 5) {
        invalido.style.display = "block";
        return;
    }

    invalido.style.display = "none";

    let horas, precoBase;

    if (dinheiro < 10) {
        horas = "1h";
        precoBase = 5;
    } else if (dinheiro < 15) {
        horas = "2h";
        precoBase = 10;
    } else {
        horas = "3h ou mais";
        precoBase = 15;
    }

    const trocoCalculado = dinheiro - precoBase;

    // atualiza os spans do modal
    horario.textContent = horas;
    valor.textContent = precoBase.toFixed(2).replace(".", ",");
    troco.textContent = trocoCalculado.toFixed(2).replace(".", ",");

    modal.style.display = "flex";
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

