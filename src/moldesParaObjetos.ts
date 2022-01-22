export class Empresa {
  public readonly nome: string; // => Apenas para leitura e seu valor pode ser inicializado no construtor
  public readonly colaboradores: Colaborador[] = []; // => readonly, nesse caso é sobre o atributo, o valor dele não pode ser mudado, porém o array eu posso dar pushs, caso eu quisesse dar um readonly no array ficaria assim public colaboradores: readonly Colaborador[]
  public readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // => valor sendo do atributo sendo iniciado no construtor
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (let colab of this.colaboradores) console.log(colab);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Porto's corp.", '99.999.999/9999-99');
const colab1 = new Colaborador('Raphael', 'Porto');
const colab2 = new Colaborador('Brenner', 'Veronez');
const colab3 = new Colaborador('Gustavo', 'Alcantara');
empresa1.adicionarColaborador(colab1);
empresa1.adicionarColaborador(colab2);
empresa1.adicionarColaborador(colab3);
empresa1.adicionarColaborador({ nome: 'Andrey', sobrenome: 'Mendonça' }); // => utilizando structural type, se a estrutura for identica ao que ele espera, ele aceita
console.log(empresa1);
