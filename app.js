let amigos = [];

// função que adiciona amigos a lista
function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nomeAmigo = campoNome.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nomeAmigo);

    let listaAmigos = document.getElementById('listaAmigos');
    let itemAmigo = document.createElement('li');
    itemAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(itemAmigo);

    campoNome.value = "";
}

// função que vai sortear os amigos adicionados
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    let itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(itemResultado);
}
