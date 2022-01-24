export class Pessoa {
  //atributos estáticos
  static idadePadrao = 0;
  static cpfPadrao = 'xxx.xxx.xxx-xx';

  readonly nome: string;
  readonly sobrenome: string;
  protected _idade: number; // para podermos mexer com getter e setter, precisamos ter um atributo que sustenta o valor
  private readonly CPF: string;

  constructor(nome: string, sobrenome: string, idade: number, CPF: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this._idade = idade;
    this.CPF = CPF;
  }

  //setters servem para ver o valor de um atributo
  get idade(): number {
    return this._idade; //retorna o valor do atributo que sustenta
  }

  //setters servem para mudar o valor de um atributo
  set idade(idade: number) {
    this._idade = idade; //troca o valor do atributo que sustenta
  }

  getCpf(): string {
    return this.CPF;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  //método estático
  static criaPessoa(nome: string, sobrenome: string) {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  metodoNormal() {
    //não consegue acessar nada estático pela palavra this
    //this.idadePadrao //=> não funciona
    console.log(Pessoa.idadePadrao);
  }
}

//Herança
export class Aluno extends Pessoa {
  public readonly sala: number;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    sala: number
  ) {
    super(nome, sobrenome, idade, CPF); //Para enviar as entradas para a super class e adicionar mais
    this.sala = sala;
  }
  getNomeCompleto(): string {
    //Sobrescevendo método já existente na classe pessoa
    return `Saíndo de aluno => ${this.nome} ${this.sobrenome}`;
  }
}

//Herança
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log(
      'Posso fazer alguma coisa antes de incovar o método da super class'
    );
    return super.getNomeCompleto();
  }
}

const pessoa = new Pessoa('Raphael', 'Porto', 24, '999.999.999-99');
const aluno = new Aluno('Brenner', 'Veronez', 25, '111.111.111-11', 1005);
const cliente = new Cliente('Lucas', 'Pierine', 26, '555.555.555-55');
const pessoa2 = Pessoa.criaPessoa('Andrey', 'Mendonça');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
console.log(pessoa.idade);
pessoa.idade = 25;
console.log(pessoa.idade);
console.log(pessoa2);
