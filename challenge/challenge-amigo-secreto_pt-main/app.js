let nomeDosAmigos = [];
function adicionarAmigo() {
        let nome = document.querySelector('input').value;
        if (nome === '') {
            alert('Por favor, digite um nome.');
            return;
        }
        if (nomeDosAmigos.includes(nome)){
            alert('Este nome já está na lista!');
            return;
        }
        nomeDosAmigos.push(nome);        
        limparCampo();
        listaTela(); 
}
function listaTela() {
    let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        for (nome of nomeDosAmigos){
            let lista = document.createElement('li');
            lista.textContent = nome;
            listaAmigos.appendChild(lista);  
        }
}
function sortearAmigo() {
    if (nomeDosAmigos.length === 0){
        alert('A lista está sem nomes. Adicione seus amigos para participar do amigo secreto.');
        return;
    }
    let sorteio = nomeDosAmigos[Math.floor(Math.random() * nomeDosAmigos.length)];
    listaAmigos.innerHTML = '';
    resultado.textContent = `O amigo secreto sorteado é: ${sorteio}`;
}
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}