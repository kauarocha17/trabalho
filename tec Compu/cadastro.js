document.getElementById("botao").addEventListener("click", function () {
  var cor = gerarCorAleatoria();
  document.body.style.backgroundColor = cor;
});

function gerarCorAleatoria() {
  var letras = "0123456789ABCDEF";
  var cor = "#";
  for (var i = 0; i < 8; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

let marca = document.getElementById("marca").value;
let produto = document.getElementById("produto").value;
let percentual = document.getElementById("percentual").value;
let preco_venda = document.getElementById("preco_venda").value;
let preço_custo = document.getElementById("preço_custo").value  ;


let div = document.createElement("div");
let prod = document.createElement("h3");
let marc = document.createElement("h3");
let vend = document.createElement("h3");

prod.innerHTML = produto;
marc.innerHTML = marca;
vend.innerHTML = preco_venda;
div.appendChild(prod);
div.appendChild(marc);
div.appendChild(vend);
document.body.appendChild(div);
document.getElementById("produto").value = "";
document.getElementById("preço_custo").value + "";
document.getElementById("preco_venda").value + "";
document.getElementById("percentual").value + "";

function cadastrarProduto(){

  const divNova = document.createElement('div');
  document.body.appendChild(div);
document.getElementById("produto").value = "";
document.getElementById("preço_custo").value + "";
document.getElementById("preco_venda").value + "";
document.getElementById("percentual").value + "";




}



