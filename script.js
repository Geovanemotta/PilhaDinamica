// Classe Nó da pilha: 
class NoPilha {
    valor;            
    proximoNo = null;
  }
  
  // Classe Pilha Dinâmica:
  class PilhaDinamica {
    topoDaPilha = null; 
  
    adicionarNoTopo(valor) {
      const novoNo = new NoPilha();
      novoNo.valor = valor;           
      novoNo.proximoNo = this.topoDaPilha;
      this.topoDaPilha = novoNo;
    }
  
    removerDoTopo() {
      if (this.topoDaPilha === null) {  
        alert("A pilha está vazia!");
        return;
      }
      const valorRemovido = this.topoDaPilha.valor;
      this.topoDaPilha = this.topoDaPilha.proximoNo;
      return valorRemovido;
    }
  
    obterTodosOsValores() {
      const valores = [];
      let noAtual = this.topoDaPilha;
      while (noAtual) {
        valores.push(noAtual.valor);
        noAtual = noAtual.proximoNo;
      }
      return valores;
    }
  }
  
  // Instância da pilha
  const pilha = new PilhaDinamica();
  
  // Funções da interface
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
