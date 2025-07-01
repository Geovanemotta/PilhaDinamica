// Classe Nó
class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

// Classe Pilha Dinâmica
class Pilha {
  constructor() {
    this.topo = null;
  }

  push(valor) {
    const novoNo = new Node(valor);
    novoNo.proximo = this.topo;
    this.topo = novoNo;
  }

  pop() {
    if (this.topo === null) {
      alert("A pilha está vazia!");
      return;
    }
    const valorRemovido = this.topo.valor;
    this.topo = this.topo.proximo;
    return valorRemovido;
  }

  toArray() {
    const elementos = [];
    let atual = this.topo;
    while (atual) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }
    return elementos;
  }
}

// Instância da pilha
const pilha = new Pilha();

// Funções para a interface
function empilhar() {
  const valor = document.getElementById('inputValor').value.trim();
  if (valor === '') {
    alert("Digite um valor para empilhar.");
    return;
  }
  pilha.push(valor);
  document.getElementById('inputValor').value = '';
  atualizarVisual();
}

function desempilhar() {
  pilha.pop();
  atualizarVisual();
}

function atualizarVisual() {
  const pilhaVisual = document.getElementById('pilhaVisual');
  pilhaVisual.innerHTML = '';

  const elementos = pilha.toArray();
  elementos.forEach(valor => {
    const noDiv = document.createElement('div');
    noDiv.className = 'node';
    noDiv.innerText = valor;
    pilhaVisual.appendChild(noDiv);
  });
}
