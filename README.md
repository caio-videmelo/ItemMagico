# Desafio de Código: Gerenciamento de Itens Mágicos

## Explicação do Código:

### Definição da Classe ItemMagico:

class ItemMagico { ... }: Define uma classe chamada ItemMagico que representa um item mágico.

constructor(tipo, dano, resistencia) { ... }: O construtor da classe recebe três parâmetros (tipo, dano, resistencia) e atribui esses valores aos atributos correspondentes do objeto (this.tipo, this.dano, this.resistencia).

### Método calcularDano():

calcularDano() { ... }: Um método da classe ItemMagico que verifica o tipo do item (this.tipo). Se o tipo for 'arma', o método retorna o dobro do dano (this.dano * 2); caso contrário, retorna o dano normal (this.dano).

### Entrada de Dados:

const tipoItem = gets();: Lê o tipo do item mágico fornecido pelo usuário.

const danoItem = parseInt(gets());: Lê o dano do item mágico e converte para número inteiro.

const resistenciaItem = parseInt(gets());: Lê a resistência do item mágico e converte para número inteiro.

### Criação do Objeto Personalizado:

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);: Cria um novo objeto ItemMagico personalizado com base nos dados fornecidos pelo usuário.

### Saída de Dados:

Imprime os atributos do item mágico personalizado usando print().

Calcula e imprime o dano causado pelo item mágico em um combate simulado utilizando o método calcularDano() do objeto itemPersonalizado.

![PrintDesafio6](https://github.com/user-attachments/assets/aa7aa270-99af-4ee6-8857-9ad61c231e93)
