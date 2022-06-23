interface Logger {
  log(text: string): void;
}

class ConsoleLogger implements Logger{
  
  log(text: string): void {
    console.log('ConsoleLogger', text);
  }
}

class ConsoleLogger2 implements Logger{
  log(text: string): void { 
    console.log('ConsoleLogger2', text);
  }
}

interface Database {
  logger: Logger;
  save(ket: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`${ key }, ${ value }`)
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const ex1 = new ExampleDatabase(log1);
const ex2 = new ExampleDatabase(log2);
const ex3 = new ExampleDatabase();

ex1.save('chave 1', 'valor 1');
ex2.save('chave 2', 'valor 2');
ex3.save('chave 3', 'valor 3');