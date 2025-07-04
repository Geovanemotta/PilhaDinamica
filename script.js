// Função para criar um nó
function criarNo(valor, proximo) {
    return {
      valor: valor,
      proximoNo: proximo || null
    };
  }
  
  // Objeto Pilha Dinâmica
  const pilha = {
    topoDaPilha: null,
  
    adicionarNoTopo: function (valor) {
      const novoNo = criarNo(valor, this.topoDaPilha);
      this.topoDaPilha = novoNo;
    },
  
    removerDoTopo: function () {
      if (this.topoDaPilha === null) {
        alert("A pilha está vazia!");
        return;
      }
      const valorRemovido = this.topoDaPilha.valor;
      this.topoDaPilha = this.topoDaPilha.proximoNo;
      return valorRemovido;
    },
  
    obterTodosOsValores: function () {
      const valores = [];
      let noAtual = this.topoDaPilha;
      while (noAtual) {
        valores.push(noAtual.valor);
        noAtual = noAtual.proximoNo;
      }
      return valores;
    }
  };
  
  function empilhar() {
    const valor = document.getElementById('inputValor').value.trim();
    if (valor === '') {
      alert("Digite um valor para empilhar.");
      return;
    }
    pilha.adicionarNoTopo(valor);
    document.getElementById('inputValor').value = '';
    atualizarVisual();
  }
  
  function desempilhar() {
    pilha.removerDoTopo();
    atualizarVisual();
  }
  
  function atualizarVisual() {
    const pilhaVisual = document.getElementById('pilhaVisual');
    pilhaVisual.innerHTML = '';
  
    const elementos = pilha.obterTodosOsValores();
    elementos.forEach(valor => {
      const noDiv = document.createElement('div');
      noDiv.className = 'node';
      noDiv.innerText = valor;
      pilhaVisual.appendChild(noDiv);
    });
  }
  
