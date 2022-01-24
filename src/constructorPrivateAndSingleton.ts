//singleton -GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
    private db: string,
    private port: string
  ) {}

  connect(): void {
    console.log(
      `Conectando: ${this.host}, ${this.user}, ${this.password}, ${this.db}, ${this.port}`
    );
  }

  //factory method
  static getDatabase(
    host: string,
    user: string,
    password: string,
    db: string,
    port: string
  ): Database {
    if (Database.database) return Database.database; //ao invés de deixar criar várias instâncias, cria-se apenas uma e testa para ver se a conexão já existe. criando assim um singleton
    Database.database = new Database(host, user, password, db, port);
    return Database.database;
  }
}
console.log('');

const database1 = Database.getDatabase(
  'localhost',
  'root',
  '1234',
  'meuBanco1',
  '1433'
);
database1.connect();

const database2 = Database.getDatabase(
  'localhost',
  'root',
  '1234',
  'meuBanco2',
  '1433'
);
database2.connect();

console.log(database1 === database2);
