export class Pessoa {
  // Pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
  readonly nome: string; // public
  readonly sobrenome: string; // public
  //Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.
  protected readonly idade: number; // protected
  // Pode ser acessada somente pela própria classe.
  private readonly CPF: string; // private

  constructor(nome: string, sobrenome: string, idade: number, CPF: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.CPF = CPF;
  }
}
