type Status = {
  vigor: number;
  fortd: number;
  for: number;
  dex: number;
  int: number;
  con: number;
  sor: number;
};

/*
  Uma classe abstrata basicamnete não pode ser instanciada diretamente, apenas pode ser instanciada por sub-classes, pois ela não é uma classe concreta
*/
abstract class Personagem {
  protected abstract emoji: string; //Esse atributo é abastrato, ou seja, obrigatóriamente todas as sub-classes tem que ter um inicializador para ele
  protected nome: string;
  protected idade: number;
  protected status: Status;
  protected vida: number;

  constructor(nome: string, idade: number, status: Status) {
    this.nome = nome;
    this.idade = idade;
    this.status = status;
    this.vida = this.status.vigor * 3 + 10;
    console.log(`${this.nome} tem ${this.vida} pontos de vida.`);
  }

  atacar(personagemAtacado: Personagem): void {
    this.bordao();
    console.log(`${personagemAtacado.nome} foi atacado.`);
    personagemAtacado.perderVida(this.status.for);
  }

  perderVida(forPersonagem: number): void {
    let vidaPerdida: number = forPersonagem * 2;
    this.vida -= vidaPerdida;
    console.log(`${this.nome} perdeu ${vidaPerdida} pontos de vida.`);
    console.log(`${this.nome} tem ${this.vida} de vida.`);
  }

  abstract bordao(): void; //Esse método ele não tem corpo e obrigatóriamente todas as classes derivadas de personagem tem que ter o método bordao
}

class Guerreiro extends Personagem {
  protected emoji = '\u{1F93A}';
  bordao(): void {
    `${this.emoji}`;
  } //PODE SÓ SIMPLESMENTE DEIXAR VAZIO
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9CC}';
  bordao(): void {
    console.log(`${this.emoji} GRRRR!!!`); //OU PODE ADICIONAR UMA FALA PARA O MONSTRO, SEMPRE QUE ELE ATACAR
  }
}

const guerr = new Guerreiro('Pancinha', 30, {
  vigor: 3,
  fortd: 2,
  for: 3,
  dex: 0,
  int: 0,
  con: 0,
  sor: 2,
});

const monst = new Monstro('Goblin', 6, {
  vigor: 1,
  fortd: 3,
  for: 1,
  dex: 0,
  int: 0,
  con: 0,
  sor: 1,
});

guerr.atacar(monst);
monst.atacar(guerr);
