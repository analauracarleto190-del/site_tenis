// ===== Dados dos produtos =====
const produtos = [
  { id: 1, nome: "Aero Run",     categoria: "corrida", preco: 399.90, cor: "#d6eaf8" },
  { id: 2, nome: "Trilha Max",   categoria: "corrida", preco: 459.90, cor: "#d5f5e3" },
  { id: 3, nome: "Urban Classic", categoria: "casual", preco: 289.90, cor: "#fcf3cf" },
  { id: 4, nome: "Street Low",   categoria: "casual",  preco: 249.90, cor: "#fadbd8" },
  { id: 5, nome: "Flip Skate",   categoria: "skate",   preco: 319.90, cor: "#e8daef" },
  { id: 6, nome: "Deck Pro",     categoria: "skate",   preco: 349.90, cor: "#d6dbdf" }
];

let carrinho = [];

// ===== Elementos =====
const grade = document.getElementById("grade-produtos");
const filtros = document.querySelectorAll(".filtro");
const contador = document.getElementById("contador");
const listaCarrinho = document.getElementById("lista-carrinho");
const carrinhoVazio = document.getElementById("carrinho-vazio");
const totalEl = document.getElementById("total");
const btnLimpar = document.getElementById("limpar");

// ===== Utilitário =====
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ===== Produtos =====
function mostrarProdutos(categoria) {
  grade.innerHTML = "";

  const lista = categoria === "todos"
    ? produtos
    : produtos.filter(p => p.categoria === categoria);

  lista.forEach(produto => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-imagem" style="background:${produto.cor}" aria-hidden="true">👟</div>
      <div class="card-corpo">
        <h3>${produto.nome}</h3>
        <span class="card-categoria">${produto.categoria}</span>
        <span class="preco">${formatarPreco(produto.preco)}</span>
        <button class="botao" data-id="${produto.id}">Adicionar ao carrinho</button>
      </div>
    `;
    grade.appendChild(card);
  });
}

filtros.forEach(botao => {
  botao.addEventListener("click", () => {
    filtros.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    mostrarProdutos(botao.dataset.categoria);
  });
});

grade.addEventListener("click", evento => {
  const botao = evento.target.closest("button[data-id]");
  if (!botao) return;
  const produto = produtos.find(p => p.id === Number(botao.dataset.id));
  carrinho.push(produto);
  atualizarCarrinho();
});

// ===== Carrinho =====
function atualizarCarrinho() {
  contador.textContent = carrinho.length;
  listaCarrinho.innerHTML = "";

  const vazio = carrinho.length === 0;
  carrinhoVazio.hidden = !vazio;
  totalEl.hidden = vazio;
  btnLimpar.hidden = vazio;

  carrinho.forEach((item, indice) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nome} - ${formatarPreco(item.preco)}</span>
      <button data-indice="${indice}">Remover</button>
    `;
    listaCarrinho.appendChild(li);
  });

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  totalEl.innerHTML = `Total: <strong>${formatarPreco(total)}</strong>`;
}

listaCarrinho.addEventListener("click", evento => {
  const botao = evento.target.closest("button[data-indice]");
  if (!botao) return;
  carrinho.splice(Number(botao.dataset.indice), 1);
  atualizarCarrinho();
});

btnLimpar.addEventListener("click", () => {
  carrinho = [];
  atualizarCarrinho();
});

// ===== Formulário de contato =====
const form = document.getElementById("form-contato");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", evento => {
  evento.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  aviso.className = "aviso";

  if (!nome || !email || !mensagem) {
    aviso.textContent = "Preencha nome, e-mail e mensagem.";
    aviso.classList.add("erro");
    return;
  }
  if (!emailValido) {
    aviso.textContent = "Digite um e-mail válido, como voce@email.com.";
    aviso.classList.add("erro");
    return;
  }

  aviso.textContent = `Obrigado, ${nome}! Recebemos sua mensagem.`;
  aviso.classList.add("ok");
  form.reset();
});

// ===== Início =====
mostrarProdutos("todos");
atualizarCarrinho();