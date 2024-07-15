// Definição da classe ItemMagico
class ItemMagico {
  // Construtor da classe que recebe os atributos tipo, dano e resistencia
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  // Método para calcular o dano durante um combate
  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets(); // Lê o tipo do item
const danoItem = parseInt(gets()); // Lê o dano do item e converte para número inteiro
const resistenciaItem = parseInt(gets()); // Lê a resistência do item e converte para número inteiro

// Cria um objeto ItemMagico personalizado com base nos dados fornecidos pelo usuário
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
